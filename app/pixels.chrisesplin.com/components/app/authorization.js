import { RootContext } from '~/contexts/root-context';
import constants from '~/constants';
import { useContext } from 'react';
import { useEffect } from 'react';
import useFirebase from '~/hooks/use-firebase';
import useLoginRedirect from '~/hooks/use-login-redirect';
import useRouter from '~/hooks/use-router';

export default function Authorization({ secure }) {
  const firebase = useFirebase();
  const { redirect } = useRouter();
  const { setRedirectUrl } = useLoginRedirect();
  const { currentUser, setCurrentUser } = useContext(RootContext);

  useEffect(() => {
    if (secure && currentUser === null) {
      (async () => {
        const redirectUrl = location.href.replace(new RegExp(location.origin), '');

        await setRedirectUrl(redirectUrl);

        redirect(constants.ROUTES.LOGIN);
      })();
    }
  }, [currentUser, secure]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      const simpleCurrentUser = !currentUser
        ? currentUser
        : {
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          };

      setCurrentUser(simpleCurrentUser);
    });
  }, []);

  return null;
}

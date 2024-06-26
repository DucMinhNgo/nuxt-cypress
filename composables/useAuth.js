import { getAuth, setPersistence, signInWithEmailAndPassword, 
    browserLocalPersistence,
    createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithCustomToken } from "firebase/auth"

export default function useAuth() {
  const user = useState("userStore", () => ({}))
  const errorBag = ref({
    email: null,
    password: null,
    name: null,
  })
  useFirebase()

  const auth = getAuth()

  function login({ email, password }) {

    resetErrors()
    const validatedData = useAuthValidator({ email, password }, "login")
   
    if(!validatedData.flag){
        errorBag.value = validatedData
        return
    }
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user.value = userDetails.user
        userDetails.user.getIdToken().then((token) => {
          serverAuth(token);
        })
      })
    })
  }

  function logout() {
    auth.signOut().then(() => {})
  }

  function signUp({ email, password, name }) {
    resetErrors()
    const validatedData = useAuthValidator({ email, password, name }, "signup")
    if(!validatedData.flag){
        errorBag.value = validatedData
        return
    }
    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user.value = userDetails.user
        userDetails.user.getIdToken().then((token) => {
            serverAuth(token);
        })
      })
    })
  }

  function resetErrors(){
    errorBag.value = {
        email: null,
        password: null,
        name: null,
    }
  }

  function serverAuth(token){
    $fetch("api/firebase", {
        method: "POST",
        body: JSON.stringify({token, type: "login"})
    }).then(res => {
        if(res.statusCode == 200){
            navigateTo("/")
        }
    }).catch(err =>{
        alert("Invalid creds.....")
    })
  }

  async function verifyToken(id) {
    const result = await getAppCheck().verifyToken(id);
  }

  onAuthStateChanged(auth, (userDetails) => {
    if(userDetails){
        user.value = userDetails
    }
    
  })

  return { user, login, signUp, logout, errorBag, verifyToken }
}
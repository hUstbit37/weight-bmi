import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            user: (null),
            isAuthenticate: (false)
        }
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        async signin (context, { email, password }) {
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                context.commit('setUser', res.user)
                context.state.isAuthenticate = true
            } else {
                throw new Error("Firebase login error");
            }
        },
        async signup (context, { email, password }) {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                context.commit('setUser', res.user)
                context.state.isAuthenticate = true
            } else {
                throw new Error("Firebase signup error");
            }
        },
        async signOut (context) {
            await signOut(auth)
            context.commit('setUser', null)
            context.state.isAuthenticate = false
        }
    }
})

const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setUser', user)
    store.isAuthenticate = true
    unsub()
})

export default store
import type { User } from "../types/User"


export default abstract class Globals {
    static readonly authenticatedStorage: string = 'authenticated'
    static readonly actualUserStorage: string = 'actual_user'

    static _authenticated: boolean = this.loadAuthenticated()
    static _actualUser: User = this.loadActualUser()

    static loadAuthenticated() : boolean {
        const loaded: string | null = localStorage.getItem(this.authenticatedStorage)
        const value: boolean = loaded ? JSON.parse(loaded).value : false
        return value
    }

    static saveAuthenticated() : void {
        localStorage.setItem(
            this.authenticatedStorage, JSON.stringify({value: this._authenticated})
        )
    }

    static set authenticated(value: boolean) {
        this._authenticated = value
        this.saveAuthenticated()
    }

    static get authenticated() : boolean { return this._authenticated }

    static loadActualUser() : User {
        const loaded: string | null = localStorage.getItem(this.authenticatedStorage)
        const user: User = loaded ? JSON.parse(loaded) : {}
        return user
    }

    static saveActualUser() : void {
        localStorage.setItem(
            this.actualUserStorage, JSON.stringify(this._actualUser)
        )
    }

    static set actualUser(user: User) {
        this._actualUser = user
        this.saveActualUser()
    }

    static get actualUser() : User { return this._actualUser }

}

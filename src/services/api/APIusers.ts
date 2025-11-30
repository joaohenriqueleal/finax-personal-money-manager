import Globals from "../../shared/Globals"

import type { ApiResponse } from "../../types/ApiResponse"
import type { LoginUser } from "../../types/LoginUser"
import type { User } from "../../types/User"


export default class APIUsers {
    private readonly usersStorage: string = 'finax_users'
    private users: User[]

    constructor() {
        this.users = this.loadUsers()
    }

    private loadUsers() : User[] {
        const loaded: string | null = localStorage.getItem(this.usersStorage)
        const users: User[] = loaded ? JSON.parse(loaded) : []
        return users
    }

    private saveUsers() : void {
        localStorage.setItem(this.usersStorage,
            JSON.stringify(this.users)
        )
    }

    public createNewUser(user: User) : ApiResponse {
        const name = user.name.trim().toLowerCase()

        if (!name || !user.password.trim() || !user.createdAt) {
            return { error: "Por favor, preencha todos os campos corretamente!" }
        }

        const exists = this.users.find(u => u.name == name)
        if (exists) {
            return { error: "Usuário já cadastrado!" }
        }

        this.users.push({...user, name})
        this.saveUsers()
        return { success: "Usuário cadastrado com sucesso!" }
    }
    
    public loginUser(user: LoginUser) : ApiResponse {
        const name = user.name.trim().toLowerCase()

        if (!name || !user.password) {
            return { error: "Por favor, preencha todos os campos corretamente!" }
        }

        const exists: User | undefined = this.users.find(u => u.name == name)
        if (!exists) {
            return { error: "Usuário não encontrado!" }
        }

        if (!(exists.password == user.password)) {
            return { error: "Senha incorreta inserida!" }
        }

        Globals.actualUser = exists
        Globals.authenticated = true
        return { success: "Usuário logado com sucesso!" }
    }

}

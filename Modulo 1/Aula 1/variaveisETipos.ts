type Role = 
|'admin'
|'employee'

type DadosUsuario  = {
    readonly userDateOfBirthday: Date;
    username: string;
    userAge: number;
    userEmail: string;
    isActive: boolean;
    userSalary: number;
    userRole: Role;
}

const dadosDoUsuario: DadosUsuario = {
    username: 'Carlos',
    userAge: 31,
    userEmail: 'carlos@gmail.com',
    isActive: true,
    userDateOfBirthday: new Date('1993-01-15'),
    userSalary: 4500.00,
    userRole: 'admin',
};

function showResult(user : DadosUsuario ): void {
    console.log( `${user.username} tem ${user.userAge} anos. ` +
        `Email: ${user.userEmail} | ` +
        `Salário: R$ ${user.userSalary} | ` +
        `Cargo: ${user.userRole}`
    )
}

showResult(dadosDoUsuario)
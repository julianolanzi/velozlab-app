export class LocalStorageUtils {
    
    public obterUsuario() {
        return JSON.parse(localStorage.getItem('velozlab.user'));
    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.token);
        this.salvarUsuario(response.user);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('velozlab.token');
        localStorage.removeItem('velozlab.user');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('velozlab.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('velozlab.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('velozlab.user', JSON.stringify(user));
    }

}
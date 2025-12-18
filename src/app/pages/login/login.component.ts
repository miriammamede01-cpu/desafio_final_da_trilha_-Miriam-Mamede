import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="login-container fade-in">
      <div class="login-card">
        <div class="icon-glow">⚡</div>
        <h2>Bem-vindo ao V2G Energy</h2>
        <p>Gerencie a energia do seu veículo e ganhe créditos.</p>

        <button class="btn-google" (click)="loginFake()" [disabled]="isLoading">

          <ng-container *ngIf="!isLoading">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            Continuar com Google
          </ng-container>

          <span *ngIf="isLoading">Conectando ao Google...</span>

        </button>

        <p class="terms">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>
      </div>
    </div>
  `,
  styles: [`
      /* Seus estilos originais mantidos aqui... */
      .login-container { height: 90vh; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle at center, #1f2937 0%, #111827 100%); }
      .login-card { background: rgba(31, 41, 55, 0.8); padding: 40px; border-radius: 16px; text-align: center; border: 1px solid #374151; max-width: 350px; width: 100%; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); }
      .icon-glow { font-size: 3rem; margin-bottom: 20px; }
      h2 { margin-bottom: 10px; color: white; }
      p { color: #9ca3af; margin-bottom: 30px; }
      .btn-google { width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; background: white; color: #374151; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 1rem; transition: transform 0.2s; }
      .btn-google:hover { transform: scale(1.02); background: #f3f4f6; }
      .btn-google:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
      .terms { font-size: 0.7rem; margin-top: 20px; opacity: 0.6; }
      .fade-in { animation: fadeIn 0.5s ease-in; }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  `]
})
export class LoginComponent {
  isLoading = false; // Controle de estado

  constructor(private router: Router) {}

  loginFake() {
    console.log('1. Botão clicado! Iniciando login...');
    this.isLoading = true; // Muda o texto do botão via Angular

    setTimeout(() => {
      const userFake = {
        name: 'Miriam (Google)',
        email: 'miriam.aluno@gmail.com',
        photo: 'https://ui-avatars.com/api/?name=Miriam+Aluno&background=10B981&color=fff',
      };

      console.log('2. Salvando usuário no LocalStorage...');
      localStorage.setItem('user_session', JSON.stringify(userFake));

      console.log('3. Tentando navegar para /dashboard...');
      this.router.navigate(['/dashboard'])
        .then(success => {
            if (success) console.log('✅ Navegação bem sucedida!');
            else console.log('❌ Navegação bloqueada (provavelmente pelo Guard)');
        })
        .catch(err => console.error('💀 Erro no roteamento:', err));

    }, 1500);
  }
}

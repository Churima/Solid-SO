class UserValidator {
    validate(user: { name: string; email: string }): boolean {
      if (!user.name || !user.email) {
        return false;
      }
      return true;
    }
  }
  
  class UserRepository {
    save(user: { name: string; email: string }): void {
      console.log('Usuário salvo:', user);
    }
  }
  
  const user = { name: 'João', email: 'joao@email.com' };
  const validator = new UserValidator();
  const repo = new UserRepository();
  
  if (validator.validate(user)) {
    repo.save(user);
  } else {
    console.log('Dados inválidos');
  }
  
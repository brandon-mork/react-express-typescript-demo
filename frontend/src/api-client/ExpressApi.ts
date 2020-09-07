import { HttpClient } from './HttpClient';

class ExpressApi extends HttpClient {
  // public getUsers = () => this.instance.get<User[]>('/users');

  // public getUser = (id: string) => this.instance.get<User>(`/users/${id}`);

  public login = (email: string, password: string) => this.instance.post('/api/auth/login', { email, password });
}

export default new ExpressApi();

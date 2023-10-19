export interface ILogin {
	status: number;
	token(token: any): unknown;
	success: any;
	username?: string;
	password?: string;
	
}
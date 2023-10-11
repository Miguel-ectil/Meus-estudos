import Cookies from "js-cookie";
import cookie from "cookie";

export function ParseCookies(req?: any) :{[key:string]: string;} {
	if(!req || !req.headers){
		return {};
	}

	return cookie.parse(req.headers.cookie || "");
}

type Cookie ={
	key: string;
	value: string ;
	options?: Cookies.CookieAttributes;
	secure?: any;

}

export function setCookie(key: string,value: string | object,options?: Cookies.CookieAttributes): void {
	if (typeof value === "object") {
		value = JSON.stringify(value);
	}
	Cookies.set(key, value, options);
	

}

export function getCookie(key: string): string | undefined {
	return Cookies.get(key);
	
}

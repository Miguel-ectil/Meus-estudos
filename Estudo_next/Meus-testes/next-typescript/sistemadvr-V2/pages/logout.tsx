import React from 'react';
import { useRouter } from 'next/router';
import { HttpClient } from '../src/infra/HttpClient/HttpClient';
import { tokenService } from '../src/services/auth/tokenService'


export default function LogoutPage() {
	const router = useRouter();
	const token = tokenService.get()

	React.useEffect( () => {
	  try {
		HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/    logout`, {
		  method: 'GET',
		  headers: {
			'Authorization': `Bearer ${token}`,
		  }	
		})
		tokenService.delete();
		router.push('/');
	  } catch (error) {
		  alert(error.message);
	}
	}, []);

	return (
		<div>
			Você será redirecionado em instantes...
		</div>
	)
}
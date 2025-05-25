import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Forward to Web3Forms
    const web3FormData = new FormData();
    web3FormData.append('name', name);
    web3FormData.append('email', email);
    web3FormData.append('message', message);
    web3FormData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY!);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: web3FormData,
    });

    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';

const GET = (): NextResponse => {
  return NextResponse.json(
    { error: 'Basic Auth Required' },
    {
      headers: { 'WWW-Authenticate': "Basic realm='secure_area'" },
      status: 401,
    },
  );
};

export { GET };

import React from 'react';
import notfound from '../assets/notfound.png';
import Button from '../components/Button';

function NotFoundPage() {
  return (
    <section className="flex min-h-screen flex-col bg-amber-100">
      <div className="m-auto w-full max-w-sm">
        <img src={notfound} alt="notfound" />

        <Button type="button" to="/" color="bg-[#FFC50F]">
          Back to Home
        </Button>
      </div>
    </section>
  );
}

export default NotFoundPage;

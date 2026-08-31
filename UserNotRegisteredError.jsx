import React from 'react';

const UserNotRegisteredError = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0b] p-6 text-white">
      <div className="w-full max-w-md rounded-[1.5rem] border border-white/8 bg-[#121214] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
        <div className="text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#D8B652]/10 text-[#D8B652]">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="mb-4 font-display text-3xl font-bold tracking-[-0.05em] text-white">Access restricted</h1>
          <p className="mb-8 text-sm leading-relaxed text-white/65">
            You are not registered to use this application. Please contact the app administrator to request access.
          </p>
          <div className="rounded-2xl border border-white/8 bg-[#0d0d0e] p-4 text-left text-sm text-white/65">
            <p className="font-medium text-white">If this is an error, you can:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Verify you are logged in with the correct account</li>
              <li>Contact the app administrator for access</li>
              <li>Try logging out and back in again</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotRegisteredError;

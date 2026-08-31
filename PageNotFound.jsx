const db = {
  auth: {
    isAuthenticated: async () => false,
    me: async () => null,
    loginViaEmailPassword: async () => {
      throw new Error('Authentication is not configured for this app.');
    },
    loginWithProvider: () => {
      throw new Error('Authentication is not configured for this app.');
    },
    logout: () => {},
    redirectToLogin: () => {},
    register: async () => {
      throw new Error('Authentication is not configured for this app.');
    },
    verifyOtp: async () => {
      throw new Error('Authentication is not configured for this app.');
    },
    setToken: () => {},
    resendOtp: async () => {
      throw new Error('Authentication is not configured for this app.');
    },
    resetPasswordRequest: async () => {
      throw new Error('Authentication is not configured for this app.');
    },
    resetPassword: async () => {
      throw new Error('Authentication is not configured for this app.');
    },
  },
  entities: new Proxy({}, {
    get: () => ({
      filter: async () => [],
      get: async () => null,
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({})
    })
  }),
  integrations: {
    Core: {
      UploadFile: async () => ({ file_url: '' })
    }
  }
};

import { useLocation } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await db.auth.me();
                return { user, isAuthenticated: true };
            } catch (error) {
                return { user: null, isAuthenticated: false };
            }
        }
    });
    
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0a0a0b] p-6 text-white">
            <div className="w-full max-w-md rounded-[1.5rem] border border-white/8 bg-[#121214] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                <div className="space-y-6 text-center">
                    <div className="space-y-2">
                        <h1 className="font-display text-7xl font-bold tracking-[-0.08em] text-[#D8B652]">404</h1>
                        <div className="mx-auto h-0.5 w-16 bg-[#D8B652]/50"></div>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-white">Page not found</h2>
                        <p className="text-sm leading-relaxed text-white/65">
                            The page <span className="font-medium text-white">"{pageName}"</span> could not be found in this application.
                        </p>
                    </div>

                    {isFetched && authData.isAuthenticated && authData.user?.role === 'admin' && (
                        <div className="rounded-2xl border border-[#D8B652]/20 bg-[#D8B652]/5 p-4 text-left">
                            <p className="text-sm font-medium text-[#D8B652]">Admin note</p>
                            <p className="mt-1 text-sm leading-relaxed text-white/65">
                                This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat.
                            </p>
                        </div>
                    )}

                    <div className="pt-2">
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="inline-flex items-center rounded-xl bg-[#D8B652] px-5 py-2.5 text-sm font-semibold text-[#131313] transition-colors hover:bg-[#E4C45F]"
                        >
                            Go home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      email?: string
      name?: string
      isAdmin?: number
      isVendor?: number
      activeVendor?: number
      permissions?: any[]
      roles?: any[]
    }
    accessToken?: string
    refreshToken?: string
    vendor?: any
  }

  interface User {
    id: string
    email: string
    name: string
    accessToken: string
    refreshToken: string
    user: any
    vendor: any
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    refreshToken?: string
    user?: any
    vendor?: any
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const response = await fetch("https://cupidapiv2.smartflowtech.com/api/oauth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "clientid": "97d44d6b-d3e9-428d-96d6-1ea3a307fd42",
              "clientsecret": "DHjcQpNGS28E0ofilYTDNtheY0avfnn2NfENO4oP"
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            })
          })

          const data = await response.json()

          if (!response.ok) {
            throw new Error(data.message || "Login failed")
          }

          return {
            id: data.data.cupid_user.id.toString(),
            email: data.data.cupid_user.email,
            name: data.data.cupid_user.name,
            accessToken: data.data.access_token,
            refreshToken: data.data.refresh_token,
            user: data.data.cupid_user,
            vendor: data.data.vendor
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.user = user.user
        token.vendor = user.vendor
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.user?.id,
          email: token.user?.email,
          name: token.user?.name,
          isAdmin: token.user?.is_admin,
          isVendor: token.user?.is_vendor,
          activeVendor: token.user?.active_vendor,
          permissions: token.user?.permissions,
          roles: token.user?.roles
        }
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
        session.vendor = token.vendor
      }
      return session
    }
  },
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  }
})

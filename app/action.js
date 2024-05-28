'use server'
 
// import { redirect } from 'next/navigation'
 
// export async function handleLogin(formData) {
//     const email = formData.get('email')
//     const password = formData.get('password')
//     const payload = {
//       email,
//       password
//     }
//      await fetch('https://pijar-mama-recipe.vercel.app/v1/auth/login', {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload),
//         credentials: "include"
//     })
//   redirect(`/profile`)
// }
import { revalidateTag } from 'next/cache'
 
export async function handleRevalidate() {
  revalidateTag('recipe')
}
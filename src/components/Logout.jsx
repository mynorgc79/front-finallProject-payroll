import sessionService from "@/services/session-service"


export const Logout = async () => {
  try {
    await sessionService.remove('token') 
    console.log('Token eliminado del sessionStorage')

    window.location.href = '/login' 
  } catch (error) {
    console.error('Error al eliminar el token del sessionStorage:', error)
  }
}

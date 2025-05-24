const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold text-center text-gray-700">Login to your account</h3>
      <form>
        <div className="mt-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input 
          type="email" 
          placeholder="Email"
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input 
          type="password" 
          placeholder="Password"
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        {/* <div className="flex items-center justify-between mt-4">
          <div>
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-600">Remember me</span>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        </div> */}
        <div className="flex items-center justify-center mt-6">
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
        </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
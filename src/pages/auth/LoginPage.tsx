import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [activeTab, setActiveTab] = useState<"client" | "operator">("client");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Toggle Tabs */}
        <div className="flex bg-slate-300 rounded-full p-1 mb-12">
          <button
            onClick={() => setActiveTab("client")}
            className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "client"
                ? "bg-white text-slate-800 shadow-md"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Soy cliente
          </button>
          <button
            onClick={() => setActiveTab("operator")}
            className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "operator"
                ? "bg-white text-slate-800 shadow-md"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Soy operador
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-transparent">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              {activeTab === "client" ? "Bienvenido" : "Acceso operadores"}
            </h1>
            <p className="text-slate-300 text-sm">
              {activeTab === "client"
                ? "Accede a tu cuenta o registra tu empresa"
                : "Panel de gestión de solicitudes de crédito"}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={
                  activeTab === "client"
                    ? "Ingresa tu correo corporativo"
                    : "Ingresá tu correo de operador"
                }
                className="w-full px-4 py-3 bg-white border-0 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu contraseña"
                  className="w-full px-4 py-3 bg-white border-0 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-400 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-0 cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-white text-sm cursor-pointer select-none"
              >
                Recordarme
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Ingresar
            </button>

            {/* Footer Text */}
            <div className="text-center mt-6">
              {activeTab === "client" ? (
                <p className="text-slate-300 text-sm">
                  ¿No tenes cuenta?{" "}
                  <button
                    type="button"
                    className="text-slate-100 font-semibold hover:text-white transition-colors"
                  >
                    Regístrate acá
                  </button>
                </p>
              ) : (
                <p className="text-slate-300 text-sm">
                  Acceso restringido para personal autorizado
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
// import { Link } from "react-router-dom";
// import LoginForm from "../../components/auth/LoginForm";
// import PublicLayout from "../../layouts/PublicLayout";

// const LoginPage = () => {
//   return (
//     <PublicLayout>
//       <div className="flex flex-col items-center justify-center min-h-screen p-4">
//         <div className="w-full max-w-md">
//           <LoginForm />
//           <div className="text-center mt-4">
//             <p className="text-gray-600">
//               ¿No tienes cuenta?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-500 hover:text-blue-700"
//               >
//                 Regístrate aquí
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </PublicLayout>
//   );
// };

// export default LoginPage;

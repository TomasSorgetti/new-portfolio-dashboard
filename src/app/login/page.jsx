export default function Login() {
  return (
    <main className="login_container text-white flex flex-col justify-center">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 class="text-4xl font-bold uppercase">Tomás Sorgetti</h1>
        <span class="text-base font-medium uppercase">Dashboard</span>
      </div>
      <form
        action=""
        className="w-[477px] h-[549px] bg-glassColor border-[1px] rounded-[28px] mx-auto flex flex-col items-center p-20 justify-between"
      >
        <div className="flex flex-col gap-6 w-full">
          <span className="uppercase font-bold shadow-shadow text-center">
            login
          </span>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Email:
            </label>
            <input type="text" className="h-10 rounded" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Password:
            </label>
            <input type="password" className="h-10 rounded" />
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
        </div>

        <button className="font-bold uppercase py-3 px-20 bg-gradient-to-r from-pinkColor2 to-pinkColor rounded">
          Login
        </button>
      </form>
    </main>
  );
}

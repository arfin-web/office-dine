import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="container min-h-screen mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16 lg:mt-20">
                <div>
                    <div className="collapse bg-base-200 m-3">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl font-bold">Admin <span className="text-primary">Credentials</span></div>
                        <div className="collapse-content">
                            <div className="card bg-base-100 w-72 lg:w-full shrink-0 shadow-2xl">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email"
                                            className="input input-bordered"
                                            value="arfinnoorrahman12@gmail.com"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="password"
                                            className="input input-bordered"
                                            value="Arfin12@$"
                                            required
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 m-3">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-bold">User <span className="text-primary">Credentials</span></div>
                        <div className="card bg-base-100 w-72 lg:w-full shrink-0 shadow-2xl">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        value="nafrizrahman10@gmail.com"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="password"
                                        className="input input-bordered"
                                        value="Nafriz10@$"
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <SignIn path="/sign-in" routing="path" />
            </div>
        </div>
    );
}
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useUser } from "../../context/auth-context";
import SVG_Resume from "../../assets/resume.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const RegisterArea = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const router = useRouter();
	const { register, errors } = useUser();

	return (
		<div className="RegisterArea">
			<div className="container">
				<div className="left">
					<Image src={SVG_Resume} alt="Resume" />
				</div>
				<div className="right">
					<Fade triggerOnce delay={200}>
						<div className="form">
							<div className="form__heading">
								Sign Up to Get Started
							</div>
							<div className="form__description">
								Sign up to the application using your
								credentials
							</div>
							<div className="form__grp">
								<label htmlFor="userid">
									What is your name?
								</label>
								<input
									type="text"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="form__grp">
								<label htmlFor="userid">
									What is your email?
								</label>
								<input
									type="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form__grp">
								<label htmlFor="userpass">
									What will be your password?
								</label>
								<input
									type="password"
									name="userpass"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
							<div className="form__grp">
								<label htmlFor="userpass">
									Confirm your password?
								</label>
								<input
									type="password"
									name="userpass"
									value={confirmPassword}
									onChange={(e) =>
										setConfirmPassword(e.target.value)
									}
								/>
							</div>

							<div className="form__grp button__grp">
								<button
									className="accent"
									onClick={() => {
										if (
											register({
												name,
												password,
												email,
												confirmPassword,
											})
										);
										router.push("/login");
									}}>
									Register
								</button>
							</div>
							<div className="helper-text">
								Already registered?{" "}
								<Link href="/login">Login</Link>
							</div>
							<div
								className={`errors ${errors && "errors-show"}`}>
								{errors}
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default RegisterArea;

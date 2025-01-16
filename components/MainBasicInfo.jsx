import React, { useState } from 'react';
// import './basicInfo.css';

const MainBasicInfo = ({ initialValues = {} }) => {
	const [fullName, setFullName] = useState(initialValues.fullName || '');
	const [middleName, setMiddleName] = useState(initialValues.middleName || '');
	const [lastName, setLastName] = useState(initialValues.lastName || '');
	const [email, setEmail] = useState(initialValues.email || '');
	const [phoneNumber, setPhoneNumber] = useState(
		initialValues.phoneNumber || ''
	);
	const [alternatePhoneNumber, setAlternatePhoneNumber] = useState(
		initialValues.alternatePhoneNumber || ''
	);
	const [pincode, setPincode] = useState(initialValues.pincode || '');
	const [address1, setAddress1] = useState(initialValues.address1 || '');
	const [address2, setAddress2] = useState(initialValues.address2 || '');
	const [country, setCountry] = useState(initialValues.country || '');
	const [state, setState] = useState(initialValues.state || '');
	const [district, setDistrict] = useState(initialValues.district || '');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here, you can save the form data to the database
		// You can make an API call or use your preferred database integration

		// Example API call using fetch
		const formData = {
			fullName,
			middleName,
			lastName,
			email,
			phoneNumber,
			alternatePhoneNumber,
			pincode,
			address1,
			address2,
			country,
			state,
			district,
		};

		fetch('/api/saveFormData', {
			method: 'POST',
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Form data saved successfully:', data);
				// Handle success, e.g., show a success message or redirect
			})
			.catch((error) => {
				console.error('Error saving form data:', error);
				// Handle error, e.g., show an error message
			});
	};

	return (
		<div className="flex flex-col items-center lg:p-0 lg:gap-[30px] absolute w-[full] lg:w-[1200px] h-[562px] lg:left-[120px] top-[151.2px] ">
			<div className="container1 mb-3.5">
				<div className="box">
					<div className="number bg-gradient-to-br from-gray-400 to-gray-900">
						1
					</div>
					<text className="w-[99px] box-text font-semibold text-gray-800">
						Basic Info
					</text>
				</div>
				<div className="line border border-gray-300"></div>
				<div className="box">
					<div className="number bg-gray-300">2</div>
					<text className="box-text w-[129px]font-normal text-gray-400">
						Business Info
					</text>
				</div>
				<div className="line border border-gray-300"></div>
				<div className="box">
					<div className="number bg-gray-300">3</div>
					<text className="box-text w-[129px] font-normal text-gray-400">
						Verification
					</text>
				</div>
			</div>
			<div className="flex flex-col items-start font-poppins p-0  w-[1200px] h-[372px]">
				<form onSubmit={handleSubmit}>
					<div className="container">
						<label className="labels">
							<text className=" text">Full Name:</text>
							<input
								className="input w-[380px]"
								type="text"
								value={fullName}
								placeholder="Enter Name"
								onChange={(e) => setFullName(e.target.value)}
							/>
						</label>
						<br />

						<label className="labels">
							<text className=" text">Middle Name:</text>
							<input
								className="input w-[380px]"
								type="text"
								placeholder="Enter Name"
								value={middleName}
								onChange={(e) => setMiddleName(e.target.value)}
							/>
						</label>
						<br />

						<label className="labels">
							<text className=" text">Last Name</text>
							<input
								className="input w-[380px]"
								type="text"
								value={lastName}
								placeholder="Enter Name"
								onChange={(e) => setLastName(e.target.value)}
							/>
						</label>
					</div>
					<br />

					<div className="container">
						<label className="labels">
							<text className=" text">Email:</text>

							<input
								className="input w-[380px]"
								type="email"
								placeholder="user@gmail.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
						<br />

						<label className="labels">
							<text className=" text">Phone Number</text>
							<input
								className="input w-[380px]"
								type="tel"
								placeholder="(304) 555-0108"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</label>
						<br />

						<label className="labels">
							<text className=" text">Alternate Phone Number:</text>
							<input
								className="input w-[380px]"
								type="tel"
								placeholder="(304) 555-0108"
								value={alternatePhoneNumber}
								onChange={(e) => setAlternatePhoneNumber(e.target.value)}
							/>
						</label>
					</div>
					<br />

					<div className="container">
						<label className="labels">
							<text className=" text">Pincode:</text>
							<input
								className="input w-[380px]"
								type="text"
								placeholder="430023"
								value={pincode}
								onChange={(e) => setPincode(e.target.value)}
							/>
						</label>
						<br />

						<label className="labels">
							<text className=" text">Address 1</text>
							<input
								className="input w-[380px]"
								type="text"
								placeholder="(304) 555-0108"
								value={address1}
								onChange={(e) => setAddress1(e.target.value)}
							/>
						</label>
						<br />

						<label className="labels">
							<text className=" text">Address 2</text>
							<input
								className="input w-[380px]"
								type="text"
								placeholder="(304) 555-0108"
								value={address2}
								onChange={(e) => setAddress2(e.target.value)}
							/>
						</label>
					</div>
					<br />

					<div className="container">
						<label className="labels">
							<text className=" text">Country:</text>
							<input
								className="input w-[380px]"
								type="text"
								placeholder="India"
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
						</label>
						<br />

						<label className="labels">
							<text className=" text">State:</text>
							<input
								className="input w-[380px]"
								type="text"
								placeholder="Punjab"
								value={state}
								onChange={(e) => setState(e.target.value)}
							/>
						</label>
						<br />

						<label className="labels">
							<text className=" text">District</text>
							<input
								className="input w-[380px]"
								type="text"
								placeholder="Enter Name"
								value={district}
								onChange={(e) => setDistrict(e.target.value)}
							/>
						</label>
					</div>
					<br />
				</form>
			</div>
			<button className="button w-[108px]" type="submit">
				<text className="button-text">Next</text>
			</button>
		</div>
	);
};

export default MainBasicInfo;

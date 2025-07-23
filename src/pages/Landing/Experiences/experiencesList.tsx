export type JobDate =
	{
		month: string;
		year: number;
	}

export interface IExperience {
	position: string;
	company: string;
	date: {
		from: JobDate;
		to: JobDate | "Present";
	};
	bullets: string[];
}

export const experiencesList: IExperience[] = [
	{
		company: "idOS",
		position: "Software Engineer",
		date: {
		  from: {
			month: "Aug",
			year: 2024,
		  },
		  to: "Present",
		},
		bullets: [
		  "Full-Stack Monorepo Development: Engineered cross-chain blockchain infrastructure in a TypeScript/React monorepo supporting 15+ packages and applications, implementing unified SDK architecture for Issuer, Consumer, and Client services enabling seamless decentralized identity management across Web3 ecosystem.",
		  
		  "Multi-Chain Signer Integration: Developed comprehensive blockchain signer support for XRP Ledger (GemWallet/Xumm), Stellar (StellarKit), and Near Protocol (wallet-selector) using Go backend with Kwil decentralized database, implementing Ed25519, NEP-413, and XRPL signature verification algorithms for secure cross-chain authentication.",
		  
		  "SDK Development & W3C Standards: Built three core SDK packages - Issuer SDK for creating/managing Verifiable Credentials, Consumer SDK for enterprises to verify user credentials, and Client SDK for browser-based wallet interactions - all supporting W3C Verifiable Credentials standard and end-to-end encryption protocols.",
		  
		  "Financial On-Ramp Integration: Integrated KYC-verified credential sharing with major fiat-to-crypto providers including Transak, Noah, and Hifi Finance, enabling seamless conversion of idOS credentials into financial services through automated customer onboarding and compliance verification workflows.",
		  
		  "Enterprise KYC & Compliance: Developed secure credential passporting system enabling regulated entities (banks, insurance, fintech) to share verified user data while maintaining privacy sovereignty, implementing timelock mechanisms, access grants, and revocation capabilities for GDPR/regulatory compliance."
		]
	},
	{
		company: "TaskBunny",
		position: "Sr. Frontend Engineer",
		date: {
			from: {
				month: "Jun",
				year: 2024,
			},
			to: {
				month: "Aug",
				year: 2024,
			},
		},
		bullets: [
			"TaskBunny is a BNB chain application where promoters can create marketing campaigns and pay in stable-coin.",
			"Enabled influencers to participate in promotions and get paid in the app's native coin through seamless service integration",
		],
	},
	{
		company: "Rizztech",
		position: "Sr. Frontend Engineer",
		date: {
			from: {
				month: "Jun",
				year: 2024,
			},
			to: {
				month: "Aug",
				year: 2024,
			},
		},
		bullets: [
			"Rizztech is a Solana-based application where users can create chat rooms and buy keys to view messages.",
			"Designed and implemented intuitive user interfaces for chat functionalities and key management, ensuring seamless service integration.",
		],
	},
	{
		company: "Dcentralab",
		position: "Sr. Frontend Engineer",
		date: {
			from: {
				month: "Sep",
				year: 2021,
			},
			to: {
				month: "May",
				year: 2024,
			},
		},
		bullets: [
			"Worked on Hord App, a high-performing Ethereum staking app with over $7 million worth of ETH staked, consistently ranking among the top 3 in APY compared t ocompetitors.",
			"Created highly reusable tools like useContractReader. A function that simplifies dealing with contracts interactions (reads and writes).",
			"Created atomic internal css framework (cover 70% of what tailwind css do",
			"Contributed to company wallet connector mono-repo using lerna, supporting multiple wallets and chains (metamask, walletConnect, ledger and more).",
			"Adding support for multi chain (Ethereum, Binance, Arbitrum)",
			"Wrote a set of unit-tests using cypress covering most used components",
		],
	},
	{
		company: "Bria.AI",
		position: "Sr. Frontend Engineer",
		date: {
			from: {
				month: "May",
				year: 2022,
			},
			to: {
				month: "Sep",
				year: 2023,
			},
		},
		bullets: [
			"Implemented functionalities for removing and changing backgrounds in images, enhancing user experience and improving the app’s visual editing capabilities.",
			"Integrated Object Manipulation Tools, Designed and integrated tools for changing objects within images, allowing users to modify and customize their photos with ease.",
			"Enhanced Image Processing Workflows, Applied various filters and image processing techniques to deliver high-quality, professional-grade photo enhancements.",
			"Optimized Frontend Performance: Improved the responsiveness and efficiency of the image processing features, ensuring smooth and fast user interactions across different devices and platforms",
		],
	},
	{
		company: "Taaspoint",
		position: "Frontend Engineer",
		date: {
			from: {
				month: "Feb",
				year: 2020,
			},
			to: {
				month: "Sep",
				year: 2021,
			},
		},
		bullets: [
			"Developed a CMT Dashboard (Campaign management tool) using (react, typescript, chart.js)",
			"Developed a tableau report gallery, a filter UI controller",
		],
	},
	{
		company: "Hemma Portal",
		position: "Frontend Engineer",
		date: {
			from: {
				month: "Apr",
				year: 2020,
			},
			to: {
				month: "Mar",
				year: 2021,
			},
		},
		bullets: [
			"Build and deliver an entire E-commerce (check at gheeed.com) from scratch that had sales reached +1M SAR in less than 7 months.",
			"Worked on couple enhancing performance techniques like progressive images and code splitting.",
		],
	},
];

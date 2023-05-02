import Image from "next/image"; // Images
import { eth } from "state/eth"; // State container
import Layout from "components/Layout"; // Layout wrapper
import { useRouter } from "next/router"; // Routing
import styles from "styles/pages/Home.module.scss"; // Page styles
import logo from "../public/logo.svg"

// Setup project details
const tokenName: string = process.env.NEXT_PUBLIC_TOKEN_NAME ?? "Token Name";
const heading: string = process.env.NEXT_PUBLIC_HEADING ?? "Some heading";
const description: string =
  process.env.NEXT_PUBLIC_DESCRIPTION ?? "Some description";

export default function Home() {
  // Routing
  const { push } = useRouter();
  // Authentication status
  const { address }: { address: string | null } = eth.useContainer();

  return (
    <Layout>
      <div className={styles.home}>
        {/* Project logo */}
        <div>
          <span style={{boxSizing:'border-box',
            display:'inline-block',
            overflow:'hidden',
            width:'initial',
            height:'initial',
            background:'none',
            opacity:1,
            border:0,
            margin:0,
            padding:0,
            position:'relative',
            maxWidth:'100%'}}>
            <Image alt="Logo" src={logo} decoding="async" data-nimg="intrinsic" style={{display:"block", maxWidth: "90%", height:"auto"}}></Image>
        </span>
        </div>
        <h1 style={{ 
          fontSize: '2em',
          fontWeight: '500',
          lineHeight: '1.2',
          margin: '1rem',
          color: 'rgb(0, 0, 0)',
          fontFamily: 'Roboto, sans-serif'
        }}> Welcome to the ECSA token claim to the early contributors </h1>
        {/* Project introduction article, if it exists */}
        {process.env.NEXT_PUBLIC_ARTICLE ? (
          <a
            href={process.env.NEXT_PUBLIC_ARTICLE}
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'rgb(255, 114, 102)',
              fontWeight: '600',
              fontSize: '18px',
              transition: 'all 0.1s ease 0s',}}
          >  
            Learn more about The Project {" "}
            <Image src="/icons/arrow3.png" alt="Arrow" height={12} width={12} />
          </a>
        ) : null}

        {/* Project heading */}
        {/* <h1>{heading}</h1> */}

        {/* Project description */}
        {/* <p>{description}</p> */}
        <p style={{
          fontSize: '1.05em',
          margin: '1rem',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'normal',
          lineHeight: '155%',
          color: 'rgb(0, 0, 0)',
          background: 'rgb(255, 180, 165)',
          padding: '1.25rem'
    }}>(1) Connect your wallet. (2) Make sure that you will have some ETH in your wallet to pay for the "gas" (the transaction fee), otherwise you won't be able to claim your tokens! (3) Sign the transaction with your the wallet. (4) If you need any help, please contact: whitelist@ecsa.io.</p>

        {/* Claim button */}
        {!address ? (
          // If not authenticated, disabled
          <button disabled>Connect Wallet to Claim Tokens
          <Image src="/icons/arrow-white.svg" alt="Arrow" height={12} width={12} />
          </button>
        ) : (
          // Else, reroute to /claim
          <button onClick={() => push("/claim")}>Claim Tokens</button>
        )}
      </div>
    </Layout>
  );
}

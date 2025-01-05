# Music Reviews App

## Overview
The **Music Reviews** app is a Web3-powered platform built on the Avalanche blockchain. It provides a secure and innovative solution for independent artists to raise funds, refine their creations, and market their work through NFT staking. The app empowers artists, investors, suppliers, and fans by leveraging blockchain technology and verifiable credentials.

---

## Features

### 1. **User Types**
- **Investors**: Fund projects and invest in streaming rights NFTs.
- **Suppliers**: Credential-vetted service providers offering production, marketing, and distribution services.
- **Artists/Creators**: Stake streaming rights to mint NFTs, distribute tokens, and share streaming revenue.
- **Followers**: Upvote music reviews, share music promos, and complete tasks to earn rewards or crypto.

### 2. **Core Functionalities**
- **Staking & NFT Minting**: Artists stake streaming rights and mint NFTs to raise funds.
- **Revenue Distribution**: Streaming revenue is collected and automatically distributed to NFT holders.
- **Credential Issuance**: Verifiable credentials (e.g., persona, skill verification, ownership) are issued using Veramo.
- **Fan Engagement**: Followers complete tasks and share music promos to earn rewards.
- **Fiat and Crypto Support**: Payouts are made in AVAX or fiat, with deposits accepted in fiat.
- **Storage Assurance**: Masters and resulting works will be stored securely on Fleek storage as assurance/security for all stakeholders.

### 3. **Technologies Used**
- **Backend**: Node.js with Express.js
- **Frontend**: React for web and React Native for the mobile wallet
- **Blockchain**: Avalanche Subnet (CIRTA - Creative Intellectual Rights to Assets)
- **DID Management**: Veramo for decentralized identity and credential issuance
- **AI Tools**: Accurascan for document verification and liveliness detection
- **Storage**: MongoDB for user and metadata storage, Fleek for secure storage of masters and resulting works
- **Smart Contracts**: Solidity for staking and NFT minting

---

## Installation

### Prerequisites
- Node.js (v16 or later)
- Avalanche CLI or Starter Kit Avalanche Go
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/music-reviews.git
   cd music-reviews
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file and configure the following:
   ```env
   DATABASE_URL=mongodb://localhost:27017/music-reviews
   INFURA_PROJECT_ID=<Your_Infura_Project_ID>
   PRIVATE_KEY=<Your_Private_Key>
   ```

4. Start the backend server:
   ```bash
   npm run start:server
   ```

5. Start the frontend:
   ```bash
   npm run start:client
   ```

6. For the mobile app:
   ```bash
   npm run start:mobile
   ```

---

## Usage

1. **Artists/Creators**:
   - Register and log in.
   - Mint an NFT by staking streaming rights.
   - Track funding progress and distribute revenue.

2. **Investors**:
   - Browse and invest in NFTs.
   - Monitor portfolio and earnings.

3. **Suppliers**:
   - Verify credentials and showcase past work.
   - Accept and fulfill tasks.

4. **Followers**:
   - Upvote reviews and complete fan tasks.
   - Share music promos to earn rewards.

---

## Future Enhancements
- **Integration with MetaMask** via Infura for wallet management.
- **Core Wallet** support for Avalanche transactions.
- **Royalty Collection Partnerships**: Integration with South African royalty bodies.
- **Enhanced AI Tools**: Automating credential verification and grading.
- **Decentralized Storage**: Continue leveraging Fleek for enhanced storage solutions.

---

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your branch.
4. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For inquiries or support:
- **Email**: support@musicreviews.app
- **Discord**: [Music Reviews Community](#)
- **Twitter**: [@MusicReviewsApp](#)

---

## Acknowledgements
- **Avalanche Dev Team**: For guidance on subnet development.
- **Accurascan**: For document verification tools.
- **Veramo**: For decentralized identity management.
- **Fleek**: For secure and decentralized storage solutions.

---

Let's revolutionize the music industry with Web3 technology!


m
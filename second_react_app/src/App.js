import React from "react";
import "./App.css";

function App() {
  const companies = [
    {
      name: "Reliance Industries",
      symbol: "RELIANCE",
      price: "₹2,500",
      change: "+1.2%",
    },
    {
      name: "Tata Consultancy Services",
      symbol: "TCS",
      price: "₹3,400",
      change: "+0.8%",
    },
    { name: "HDFC Bank", symbol: "HDFCBANK", price: "₹1,600", change: "-0.5%" },
    { name: "ICICI Bank", symbol: "ICICIBANK", price: "₹950", change: "+1.5%" },
    { name: "Infosys", symbol: "INFY", price: "₹1,450", change: "+0.2%" },
    {
      name: "Hindustan Unilever",
      symbol: "HINDUNILVR",
      price: "₹2,550",
      change: "+0.3%",
    },
    {
      name: "State Bank of India",
      symbol: "SBIN",
      price: "₹590",
      change: "-0.8%",
    },
    {
      name: "Bharti Airtel",
      symbol: "BHARTIARTL",
      price: "₹920",
      change: "+2.1%",
    },
    {
      name: "Adani Enterprises",
      symbol: "ADANIENT",
      price: "₹2,200",
      change: "+3.4%",
    },
    {
      name: "Kotak Mahindra Bank",
      symbol: "KOTAKBANK",
      price: "₹1,850",
      change: "-0.6%",
    },
    { name: "ITC Limited", symbol: "ITC", price: "₹480", change: "+0.9%" },
    { name: "Larsen & Toubro", symbol: "LT", price: "₹2,000", change: "+1.0%" },
    { name: "Axis Bank", symbol: "AXISBANK", price: "₹900", change: "+1.8%" },
    {
      name: "Maruti Suzuki",
      symbol: "MARUTI",
      price: "₹10,000",
      change: "+0.5%",
    },
    { name: "Wipro", symbol: "WIPRO", price: "₹400", change: "-0.7%" },
    {
      name: "HCL Technologies",
      symbol: "HCLTECH",
      price: "₹1,150",
      change: "+0.3%",
    },
    {
      name: "Nestle India",
      symbol: "NESTLEIND",
      price: "₹22,000",
      change: "-0.4%",
    },
    {
      name: "Bajaj Finance",
      symbol: "BAJFINANCE",
      price: "₹6,800",
      change: "+2.5%",
    },
    {
      name: "UltraTech Cement",
      symbol: "ULTRACEMCO",
      price: "₹8,200",
      change: "+0.6%",
    },
    {
      name: "Asian Paints",
      symbol: "ASIANPAINT",
      price: "₹3,100",
      change: "+0.7%",
    },
    {
      name: "Sun Pharma",
      symbol: "SUNPHARMA",
      price: "₹1,100",
      change: "+0.4%",
    },
    { name: "Power Grid", symbol: "POWERGRID", price: "₹240", change: "+1.1%" },
    {
      name: "Tata Steel",
      symbol: "TATASTEEL",
      price: "₹1,220",
      change: "-0.3%",
    },
    {
      name: "Tech Mahindra",
      symbol: "TECHM",
      price: "₹1,200",
      change: "+0.2%",
    },
    { name: "HDFC Life", symbol: "HDFCLIFE", price: "₹620", change: "-0.8%" },
    {
      name: "Adani Green",
      symbol: "ADANIGREEN",
      price: "₹980",
      change: "+2.9%",
    },
    {
      name: "Tata Motors",
      symbol: "TATAMOTORS",
      price: "₹550",
      change: "+1.5%",
    },
    {
      name: "Bharat Petroleum",
      symbol: "BPCL",
      price: "₹390",
      change: "+1.0%",
    },
    {
      name: "Indian Oil Corporation",
      symbol: "IOC",
      price: "₹115",
      change: "-0.2%",
    },
    { name: "JSW Steel", symbol: "JSWSTEEL", price: "₹750", change: "+1.2%" },
    {
      name: "Grasim Industries",
      symbol: "GRASIM",
      price: "₹1,800",
      change: "+0.7%",
    },
    {
      name: "Eicher Motors",
      symbol: "EICHERMOT",
      price: "₹3,800",
      change: "+0.3%",
    },
    {
      name: "Hero MotoCorp",
      symbol: "HEROMOTOCO",
      price: "₹3,200",
      change: "-0.5%",
    },
    { name: "Tata Power", symbol: "TATAPOWER", price: "₹230", change: "+1.6%" },
    {
      name: "Britannia Industries",
      symbol: "BRITANNIA",
      price: "₹4,900",
      change: "+0.4%",
    },
    { name: "Coal India", symbol: "COALINDIA", price: "₹210", change: "-0.7%" },
    {
      name: "Shree Cement",
      symbol: "SHREECEM",
      price: "₹25,000",
      change: "+0.1%",
    },
    { name: "Hindalco", symbol: "HINDALCO", price: "₹450", change: "+1.8%" },
    { name: "GAIL India", symbol: "GAIL", price: "₹120", change: "-0.4%" },
    { name: "Cipla", symbol: "CIPLA", price: "₹1,100", change: "+1.3%" },
    {
      name: "Dr. Reddy's Labs",
      symbol: "DRREDDY",
      price: "₹4,950",
      change: "+0.6%",
    },
    {
      name: "Zee Entertainment",
      symbol: "ZEEL",
      price: "₹275",
      change: "+0.9%",
    },
    {
      name: "IndusInd Bank",
      symbol: "INDUSINDBK",
      price: "₹1,350",
      change: "+0.5%",
    },
    {
      name: "Pidilite Industries",
      symbol: "PIDILITIND",
      price: "₹2,450",
      change: "-0.3%",
    },
    {
      name: "Divi's Labs",
      symbol: "DIVISLAB",
      price: "₹4,500",
      change: "+0.8%",
    },
    {
      name: "Apollo Hospitals",
      symbol: "APOLLOHOSP",
      price: "₹5,000",
      change: "+1.2%",
    },
  ];

  return (
    <div>
      <style>
        {`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
  color: #333;}`}
      </style>
      <header className="header">
        <h1>
          $tock Price Changes on the Last Trading Day: My Digest of Top Indian
          Companies
        </h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2769/2769454.png"
          className="img"
          alt="logo"
        />
      </header>

      <main className="main">
        <div className="company-list">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <p>
                <strong>Company:</strong> {company.name}
              </p>
              <p>
                <strong>Symbol:</strong> {company.symbol}
              </p>
              <p>
                <strong>Price:</strong> {company.price}
              </p>
              <p>
                <strong>Change:</strong> {company.change}
              </p>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 Indian Stock Market Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

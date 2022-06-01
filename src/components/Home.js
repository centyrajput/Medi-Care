import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MasksIcon from "@mui/icons-material/Masks";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import MedicationIcon from "@mui/icons-material/Medication";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
// import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import Bestprops from "./Bestprops";
import Cschildprops from "./Cschildprops";

export const home = () => {
  return (
    <div className="home">
      {/* NAVBAR SECTION*/}
      <div className="nav">
        <div className="n1">
          <a>
            Medi<span>Care+</span>
          </a>
        </div>
        <div className="n2">
          <ul>
            <li>
              <a className="active">Home</a>{" "}
            </li>
            <li>
              <a>About</a>{" "}
            </li>
            <li>
              <a>Services</a>{" "}
            </li>
            <li>
              <a>News</a>{" "}
            </li>
          </ul>
          <a className="contactbtn">Contact</a>
        </div>

        <MenuIcon className="hamicon" />
      </div>

      {/* BEST SPECIALIST SECTION */}
      <div className="best">
        <div className="b1">
          <p>Welcome To MediCare+ Clinic</p>
          <h1>Best Specialist</h1>
          <p className="pcc">
            We are on the leading edge of cancer care. Providing the full
            continum of cancer treatments and support care services in a single
            convenient location.
          </p>
          <div className="btn2">
            <a className="mbtn">Make An Appointment </a>
            <a className="dbtn">Department </a>
          </div>
        </div>
        <div className="b2">
          <img src="./undraw.png" alt="image" />
        </div>
      </div>

      {/* OUR SERVICES SECTION */}
      <div className="ourservice">
        <h1 className="ourh">Our Services</h1>
        <p className="ourp">
          We provide the most full medical services, <br /> so every person
          could have the oppurtunity <br />
          to receive qualitative medical help
        </p>

        <div className="opt">
          <div className="optchild">
            <MasksIcon className="osicon1" />
            <h1>Dental Care</h1>
            <p>
              LEARN MORE <ArrowForwardIosIcon className="opticon" />{" "}
            </p>
          </div>
          <div className="optchild">
            <VaccinesIcon className="osicon2" />
            <h1>Pulmonary</h1>
            <p>
              LEARN MORE <ArrowForwardIosIcon className="opticon" />{" "}
            </p>
          </div>
          <div className="optchild">
            <SelfImprovementIcon className="osicon3" />
            <h1>Neurological</h1>
            <p>
              LEARN MORE <ArrowForwardIosIcon className="opticon" />{" "}
            </p>
          </div>
          <div className="optchild">
            <MedicationIcon className="osicon4" />
            <h1>Prediatrics</h1>
            <p>
              LEARN MORE <ArrowForwardIosIcon className="opticon" />{" "}
            </p>
          </div>
        </div>
      </div>

      {/* CLINIC SECTION  */}

      <div className="clinic">
        <div className="c1">
          <h1 className="clinich">Clinic With Innovative</h1>
          <p className="clinicp">
            We provide the most full medical services, so every person could{" "}
            <br /> have the oppurtunity to receive qualitative medical help
          </p>
          <a className="clinicbtn">Learn More</a>
        </div>
        <div class="c2">
          <div className="clichild1 clichild">
            <img src="./undraw2.png" alt="image" />
            <h1>Qualified Doctors</h1>
          </div>
          <div className="clichild2 clichild">
            <img src="./undraw3.png" alt="image" />
            <h1>Emergency Care</h1>
          </div>

          <div className="clichild3 clichild">
            <img src="./undraw4.png" alt="image" />
            <h1>24 Hours Service</h1>
          </div>
        </div>
      </div>

      {/* BEST 2 SECTION */}
      <div className="bs">
        <h1>We Have The Best Specialist</h1>
        <p>
          We have a wide experience in experience design and strategy, <br />{" "}
          with locally-rooted knowledge.
        </p>
        <div className="bschild">
          <Bestprops
            sorc="./doctor.jpg"
            dname="Dr. Awaatif Al"
            title1="Dental Care"
          />
          <Bestprops
            sorc="./doctor 2.jpg"
            dname="Dr. Filipa Gasper"
            title1="Cardiology"
          />
          <Bestprops
            sorc="./doctor 3.jpg"
            dname="Dr. Sukhmeet Gorae "
            title1="Neurological"
          />
          <Bestprops
            sorc="./doctor 4.jpg"
            dname="Dr. Siri jakobsson"
            title1="Pideatrics"
          />
        </div>
      </div>

      {/* CUSTOMER SECTION */}

      <div className="cs">
        <h1>What Our Customers Say</h1>
        <div className="csinner">
          <Cschildprops
            sorc="./person1.jpg"
            comment="I want to thanks everyone for this facility for the 
        quality of care and compassion they showed during 
        my stay."
            pname="Jacqueline Asong
        Patient"
          />

          <Cschildprops
            sorc="./person2.jpg"
            comment="I want to thanks everyone for this facility for the 
        quality of care and compassion they showed during 
        my stay."
            pname="Patricia Riberio
        Patient"
          />
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="news">
        <div className="newschild">
          <h1>Subscribe To Newsletter</h1>
          <p>We have a wide experience in experience design and strategy.</p>
          <input />
        </div>
      </div>

      {/* NAVBAR 2 SECTION*/}
      <div className="nav">
        <div className="n1">
          <a>
            Medi<span>Care+</span>
          </a>
        </div>
        <div className="n2 nav2">
          <ul>
            <li>
              <a>Home</a>{" "}
            </li>
            <li>
              <a>About</a>{" "}
            </li>
            <li>
              <a>Services</a>{" "}
            </li>
            <li>
              <a>News</a>{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="footer">
        <FacebookIcon className="ficon" />
        <GoogleIcon className="ficon" />
        <TwitterIcon className="ficon" />
      </div>
    </div>
  );
};
export default home;

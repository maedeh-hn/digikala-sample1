import React from 'react'
import './Footer.css'
import logo from "../../assests/imges/img14.png"
import { Link, Route } from 'react-router-dom';
import { MdDeliveryDining} from 'react-icons/md'
import { MdPayment} from 'react-icons/md'
import { BiSupport} from 'react-icons/bi'
import { MdAssignmentReturn} from 'react-icons/md'
import { MdOutlineSecurity} from 'react-icons/md'
import { GrInstagram} from 'react-icons/gr'
import { GrTwitter} from 'react-icons/gr'
import { GrLinkedin} from 'react-icons/gr'
import { GrYoutube} from 'react-icons/gr'


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    
  return (
  
      <footer className='footer'>
          <div className="d-flex part-1-footer">
              <div><img  className="footer-logo" src={logo}/></div>
              <div className=" footer-btn">
              <div onClick={scrollToTop}>
                    بازگشت به بالا
              </div>
              </div>
          </div>
          <div className="info-line">
          <span>تلفن پشتیبانی:۶۱۹۳۰۰۰۰ - ۰۲۱</span>
          <span className="phone-number-separator">|</span>
          <span>۶۱۹۳۰۰۰۰ - ۰۲۱</span>
          <span className="phone-number-separator">|</span>
          <span>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</span>
          <span className="phone-number-separator">|</span>
      </div>

        <div className="footer-delivery-info">
          <Link to="/" className="footer-delivery-info-link">
            <div className="footer-delivery-info-item">
              <MdDeliveryDining className="footer-delivery-info-icon"/>
            </div>
            <div className="footer-delivery-info-lable">امکان تحویل اکسپرس</div>
          </Link>
          <Link to="/" className="footer-delivery-info-link">
            <div className="footer-delivery-info-item">
              <MdPayment className="footer-delivery-info-icon"/>
            </div>
            <div className="footer-delivery-info-lable"> امکان پرداخت در محل</div>
          </Link>
          <Link to="/" className="footer-delivery-info-link">
            <div className="footer-delivery-info-item">
              <BiSupport className="footer-delivery-info-icon"/>
            </div>
            <div className="footer-delivery-info-lable">  7 روز هفته، 24 ساعت    </div>
          </Link>
          <Link to="/" className="footer-delivery-info-link">
            <div className="footer-delivery-info-item">
              <MdAssignmentReturn className="footer-delivery-info-icon"/>
            </div>
            <div className="footer-delivery-info-lable">  7 روز ضمانت بازگشت کالا</div>
          </Link>
          <Link to="/" className="footer-delivery-info-link">
            <div className="footer-delivery-info-item">
              <MdOutlineSecurity className="footer-delivery-info-icon"/>
            </div>
            <div className="footer-delivery-info-lable">  ضمانت اصل بودن کالا</div>
          </Link>
        </div>
        <div className="footer-column-div">
      <nav>
        <Link to="/" className="footer-column-link">
          با دیجی کالا
        </Link>
        <ul>
          <li><Link to="/" className="footer-column-li">اتاق خبر دیجی کالا</Link></li>
          <li><Link to="/" className="footer-column-li">فروش در دیجی کالا</Link></li>
          <li><Link to="/" className="footer-column-li">فرصت های شغلی </Link></li>
          <li><Link to="/" className="footer-column-li">تمای با دیجی کالا </Link></li>
          <li><Link to="/" className="footer-column-li">درباره دیجی کالا</Link></li>
        </ul>
      </nav>
      <nav>
        <Link to="/" className="footer-column-link">
         خدمات مشتریان
        </Link>
        <ul>
          <li><Link to="/" className="footer-column-li">پاسخ به پرسش های متداول</Link></li>
          <li><Link to="/" className="footer-column-li">رویه های بازگردانی کالا</Link></li>
          <li><Link to="/" className="footer-column-li">شرایط استفاده </Link></li>
          <li><Link to="/" className="footer-column-li">حریم خصوصی </Link></li>
          <li><Link to="/" className="footer-column-li">گزارش باگ</Link></li>
        </ul>
      </nav>
      <nav>
        <Link to="/" className="footer-column-link">
         راهنمای خرید از دیجی کالا
        </Link>
        <ul>
          <li><Link to="/" className="footer-column-li">نحوه ثبت سفارش</Link></li>
          <li><Link to="/" className="footer-column-li">رویه ارسال سفارش</Link></li>
          <li><Link to="/" className="footer-column-li">شیوه های ارسال </Link></li>
        </ul>
      </nav>
      <nav>
        <div className="footer-column-link">
          با ما همراه باشید
        </div>
        <div className="footer-social">
          <Link className="footer-social-links" to="/">
            <GrInstagram/>
          </Link>
          <Link className="footer-social-links" to="/">
            <GrTwitter/>
          </Link>
          <Link className="footer-social-links" to="/">
            <GrLinkedin/>
          </Link>
          <Link className="footer-social-links" to="/">
            <GrYoutube/>
          </Link>
        </div>
      </nav>
        </div>
      </footer>

  )
}

export default Footer

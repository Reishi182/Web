import React, { useEffect, useState } from 'react';
import './style.css';
import batamImage from './batam.jpeg';
import gambarImage from './gambar.png';
import programImage from './program.jpg';
import peduliImage from './peduli.jpg';
import cv from './cv.png';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import 'animate.css';

const MyComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.getElementsByClassName("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
        const target = this.getAttribute("data-target");
        showSection(target);
        setIsMenuOpen(false); // Close the menu when a link is clicked
      });
    }

    function showSection(target) {
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
      }
      document.getElementById(target).classList.add("active");  
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Dinas Sosial Dan Pemberdayaan Masyarakat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-target="home"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-target="profil"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profil
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-target="pelayanan"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pelayanan
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-target="program"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Program
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-target="kegiatan"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kegiatan
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-target="cv"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="content">
        <div id="home" className="section active">
        <h1>
          OPERASI PENJANGKAUAN TIM REAKSI CEPAT (TRC) DINSOS PM KOTA BATAM
        </h1>
          <div className="video-wrapper">
          <div id="videoContainer">
            <iframe
              id="videoPlayer"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xGPpN8VpyBg"
              frameborder="0"
              allowfullscreen
            ></iframe>
            </div>
          </div>
        </div>

        <div id="profil" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className='judul'> 
                  Dinas Sosial dan Pemberdayaan Masyarakat Kota Batam dibentuk berdasarkan:
                </p>
                <ol>
                  <li className='profile-paragraph'>
                    Peraturan Daerah Kota Batam Nomor 10 Tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah.
                  </li>
                  <li className='profile-paragraph'>
                    Peraturan Wali Kota Batam Nomor 28 Tahun 2016 Tentang Susunan Organisasi dan Tata Kerja Dinas Daerah.
                  </li>
                  <li className='profile-paragraph'>
                    Peraturan Wali Kota Batam Nomor 45 Tahun 2016 tentang Tugas Pokok, Fungsi dan Uraian Tugas Dinas Sosial dan Pemberdayaan Masyarakat.
                  </li>
                </ol>
                <p className='profile-paragraph'>
                  Berdasarkan Peraturan Wali Kota Batam Nomor 45 Tahun 2016 tentang Tugas Pokok, 
                  Fungsi dan Uraian Tugas Dinas Sosial dan Pemberdayaan Masyarakat, 
                  Dinas Sosial dan Pemberdayaan Masyarakat Kota Batam sebagai salah satu perangkat kerja 
                  Pemerintah Kota Batam yang dipimpin oleh kepala dinas sosial yang berkedudukan 
                  dan bertanggung jawab kepada Wali Kota melalui sekretaris daerah. Dinas Sosial 
                  dan Pemberdayaan Masyarakat Kota Batam merupakan salah satu instansi pemerintah 
                  daerah yang melaksanakan urusan wajib pemerintahan di bidang sosial, 
                  di antaranya pemberdayaan sosial, rehabilitasi sosial, perlindungan dan jaminan sosial, p
                  enanganan bencana, dan pengelolaan taman makam pahlawan. Sementara itu, urusan pemerintahan
                  wajib di bidang pemberdayaan masyarakat dan desa meliputi administrasi pemerintahan desa
                  dan pemberdayaan lembaga kemasyarakatan, lembaga adat, dan masyarakat hukum adat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="pelayanan" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className='judul'>Jam Pelayanan</p>
                  <div class="gambar-image">
                    <img src={gambarImage} className="img-liquid" alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div id="program" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <p className='judul'> 
                  Bidang Fakir Miskin
                </p>
              <div className='container-c'>
                <div className='left'>
                  <h3 className='seksi'>Seksi Penanganan Fakir Miskin</h3>
                <ol>
                  <li className='profile-paragraph1'>
                    Data Terpadu Kesejahteraan Sosial (DTKS).
                  </li>
                  <li className='profile-paragraph1'>
                    Program Sembako/BPNT
                  </li>
                  <li className='profile-paragraph1'>
                    Bantuan Sosial Tunai/BST
                  </li>
                  <li className='profile-paragraph1'>
                    Pendamping Bansos
                  </li>
                  <li className='profile-paragraph1'>
                    E-Warung Program Sembako
                  </li>
                  <li className='profile-paragraph1'>
                    Agen Program Sembako
                  </li>
                </ol>
                </div>
                <div className='right'>
                <h3 className='seksi1'>Seksi Kelembagaan Kesejahteraan Sosial</h3>
                <ol>
                  <li className='profile-paragraph2'>
                    Lembaga Kesejahteraan Sosial Anak (LKSA)
                  </li>
                  <li className='profile-paragraph2'>
                    Panti Jompo
                  </li>
                  <li className='profile-paragraph2'>
                    Panti ODGJ
                  </li>
                  <li className='profile-paragraph2'>
                    Rumah Duka
                  </li>
                  <li className='profile-paragraph2'>
                    Yayasan Sosial Lainnya
                  </li>
                  <li className='profile-paragraph2'>
                    Tenaga Kesejahteraan Sosial Kecamatan (TKSK)
                  </li>
                  <li className='profile-paragraph2'>
                    Lembaga Konsultasi Kesejahteraan Keluarga LK3
                  </li>
                  <li className='profile-paragraph2'>
                    Pekerja Sosial Masyarakat (PSM)
                  </li>
                  <li className='profile-paragraph2'>
                    Karang Taruna
                  </li>
                </ol>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div id="kegiatan" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className='judul'>Penyaluran Bantuan Bencana Cianjur</p>
                  <div class="peduli-image">
                    <img src={peduliImage} className="img-liquid" alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cv" className="section">
  <div className="cv-container">
    <div className="header">
      <img src={cv} alt="Foto Profil" className="profile-picture" />
      <div className="contact">
        <h2>Gary</h2>
        <p>Email: garytan231@gmail.com | No. HP: 081266383379</p>
      </div>
    </div>
    <div className="content">
      <div className="profile" style={{ textAlign: 'justify' }}>
        <h2>Profil Kehidupan</h2>
        <p>Saya adalah lulusan SMK Teknik Komputer dan Jaringan di SMK Maitreyawira Tanjung Pinang.
          <br />Saat ini saya sedang menjalankan pendidikan S1 di Universitas Putera Batam jurusan Teknik Informatika</p>
      </div>

      <div className="experience">
        <h2>Pengalaman Kerja</h2>
        <ul>
          <FontAwesomeIcon icon={faCheckCircle} /> 2019 - 2020 : Magang disalah Satu Toko komputer di Tanjung Pinang CV.Mediatech Computer<br />
          <FontAwesomeIcon icon={faCheckCircle} /> 2022 - 2023 : Sebagai Administrasi di Law Consultant Firm<br />
        </ul>
      </div>
      <div className="education">
        <h2>Pendidikan</h2>
        <ul>
          <FontAwesomeIcon icon={faCheckCircle} /> 2009 - 2015 : SD Advent Batam<br />
          <FontAwesomeIcon icon={faCheckCircle} /> 2015 - 2018 : SMP Maitreyawira<br />
          <FontAwesomeIcon icon={faCheckCircle} /> 2018 - 2021 : SMK Maitreyawira<br />
        </ul>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <FontAwesomeIcon icon={faCheckCircle} /> Mikrotik<br />
          <FontAwesomeIcon icon={faCheckCircle} /> Cisco<br />
          <FontAwesomeIcon icon={faCheckCircle} /> Excel<br />
          <FontAwesomeIcon icon={faCheckCircle} /> Java<br />
          <FontAwesomeIcon icon={faCheckCircle} /> Debian<br />
        </ul>
      </div>
      <div className="language">
        <h2>Bahasa</h2>
        <ul>
          <FontAwesomeIcon icon={faCheckCircle} /> Bahasa Inggris Advanced<br />
        </ul>
      </div>
    </div>
  </div>
</div>


  <div class="contact-info">
    <div class="contact-image">
      <img src={batamImage} alt="Foto Kontak" />
    </div>
    <div class="contact-details">
      <h2>Kontak</h2>
      <p>DINAS SOSIAL DAN PEMBERDAYAAN MASYARAKAT</p>
      <p>Jl. Raja Haji No.9 Kelurahan Sei Harapan Kecamatan Sekupang – Kota Batam</p>
      <p>Telp. & Fax : (0778) 321370</p>
      <p>Website : www.batam.go.id</p>
      <p>Email : dinsospm@batam.go.id</p>
    </div>
  </div>

  <div class="footer">
    <p>Copyright &copy; 2023 Dinas Sosial Dan Pemberdayaan Masyarakat All rights reserved.</p>
  </div>
    </div>
  );
}
export default MyComponent;
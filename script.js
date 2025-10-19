{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    // 1. Logique de navigation par section\
    const navItems = document.querySelectorAll('.nav-item');\
    const sections = document.querySelectorAll('.section');\
\
    function showSection(sectionId) \{\
        sections.forEach(section => \{\
            section.classList.remove('active');\
        \});\
        document.getElementById(sectionId).classList.add('active');\
\
        navItems.forEach(item => \{\
            item.classList.remove('active');\
            if (item.getAttribute('data-section') === sectionId) \{\
                item.classList.add('active');\
            \}\
        \});\
    \}\
\
    // Gestionnaires d'\'e9v\'e9nements pour les boutons de navigation (li)\
    navItems.forEach(item => \{\
        item.addEventListener('click', () => \{\
            const sectionId = item.getAttribute('data-section');\
            showSection(sectionId);\
            // Ferme le menu mobile si impl\'e9ment\'e9 (non visible dans le code fourni, mais bonne pratique)\
            // window.scrollTo(0, 0); \
        \});\
    \});\
\
    // Gestionnaire d'\'e9v\'e9nement pour le CTA (D\'e9couvrir le programme)\
    const ctaButton = document.querySelector('.cta-button');\
    if (ctaButton) \{\
        ctaButton.addEventListener('click', (e) => \{\
            e.preventDefault();\
            const sectionId = ctaButton.getAttribute('data-section');\
            showSection(sectionId);\
        \});\
    \}\
\
    // 2. Logique du compte \'e0 rebours\
    const targetDate = new Date("Feb 20, 2026 16:45:00").getTime();\
\
    function updateCountdown() \{\
        const now = new Date().getTime();\
        const distance = targetDate - now;\
\
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));\
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);\
\
        // Mise \'e0 jour de l'affichage\
        document.getElementById('days').textContent = days > 0 ? days : '0';\
        document.getElementById('hours').textContent = hours > 0 ? hours : '0';\
        document.getElementById('minutes').textContent = minutes > 0 ? minutes : '0';\
        document.getElementById('seconds').textContent = seconds > 0 ? seconds : '0';\
\
        // Si le compte \'e0 rebours est termin\'e9 (optionnel)\
        if (distance < 0) \{\
            clearInterval(countdownInterval);\
            document.getElementById('days').textContent = '0';\
            document.getElementById('hours').textContent = '0';\
            document.getElementById('minutes').textContent = '0';\
            document.getElementById('seconds').textContent = '0';\
        \}\
    \}\
\
    // Mise \'e0 jour du compte \'e0 rebours toutes les secondes\
    const countdownInterval = setInterval(updateCountdown, 1000);\
    updateCountdown(); // Appel initial\
\});}
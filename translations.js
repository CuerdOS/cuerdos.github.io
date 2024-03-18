//Welcome to the translations, go to Line 26 to modify/add translations
function getBrowserLanguage()
{
	return navigator.language || navigator.userLanguage;
}

function updatePageContent(translations, language)
{
	for (var key in translations[language])
	{
		if (translations[language].hasOwnProperty(key))
		{
			var element = document.getElementById(key);
			if (element)
			{
				element.innerHTML = translations[language][key];
			}
		}
	}
}

function initializePageContent()
{
	var browserLanguage = getBrowserLanguage().split('-')[0];

	var translations =
	{
		//ENGLISH STRINGS
		'en':
		{
			'str-menu-about': 'About',
			'str-menu-download': 'Download',
			'str-menu-wiki': 'Wiki',
			'str-slogan': 'Optimized to the last pixel.',
			'str-title-about': 'About',
			'str-content-about-1': 'CuerdOS is a GNU/Linux distribution focused on stability and constant performance on computers of any range, without losing any functionality.',
			'str-content-about-2': 'This distribution is not only a derivative with a customized desktop environment, but it has a series of optimizations and performance improvements, including: optimization of active services, improvements in the use of the processor, among many others.',
			'str-title-features': 'Main characteristics',
			'str-title-feature-1': 'Debian based',
			'str-content-feature-1': 'This provides great stability and security, as well as very good flexibility.',
			'str-title-feature-2': 'Light and fashionable',
			'str-content-feature-2': 'Unlike other lightweight distributions, CuerdOS is a system that opts for the avant-garde.',
			'str-title-feature-3': 'Sway',
			'str-content-feature-3': 'This distribution focuses on offering a great experience with Sway, although it also has i3 and Xfce.',
			'str-title-feature-4': 'Own repositories',
			'str-content-feature-4': 'CuerdOS has its own repositories where packages that are not in Debian are provided.',
			'str-title-otherfeatures': 'Other technical features',
			'str-content-otherfeatures-1': 'Bauh Store preconfigured for easy installation of programs (Debs y flatpak).',
			'str-content-otherfeatures-2': 'ZRam enabled for better performance on low requirements machines but also to avoid writes to the SSD or lag times on the HDD by the SWAP.',
			'str-content-otherfeatures-3': 'Apt-fast pre-installed and configured.',
			'str-content-otherfeatures-4': 'Optimized CPU usage and RAM management.',
			'str-content-otherfeatures-5': 'TLP preconfigured for both Intel and AMD for better battery life.',
			'str-content-otherfeatures-6': 'Pipewire as a media server.',
			'str-content-otherfeatures-7': 'GRUB and <i>boot logo</i> customized to your beloved neofetch.',
			'str-content-otherfeatures-8': 'Polybar and Rofi (and Waybar) preconfigured and themed to achieve a good visual coherence together with the icons and windows themes...',
			'str-content-otherfeatures-9': 'Support for virtualization.',
			'str-content-otherfeatures-10': 'Automatic security updates.',
			'str-title-download': 'Download',
			'str-content-download-1': 'This is the first version of CuerdOS, called CuerdOS <a class="element" href="https://es.wikipedia.org/wiki/Cessna">\'Cessna\'</a>, in case of finding errors or contributing ideas, please contact us via email or telegram. Thank you all for your collaboration and support.!',
			'str-content-download-2': 'You can view the changelogs and bugs reported for different releases <a class="element" href="changelog.html">here</a>.',
			'str-titile-tabletitle': 'System Requirements',
			'str-tabletitle-minimum': 'Minimum',
			'str-tabletitle-minimum': 'Recommended',
			'str-tablecontent-minram': '1GB of RAM',
			'str-tablecontent-recracm': '2GB of RAM',
			'str-tablecontent-mincpu': 'x86_64 1,00 Ghz CPU',
			'str-tablecontent-mindisk': '15GB Disk storage',
			'str-tablecontent-recdisk': '15GB Disk storage on SSD',
			'str-title-downloadlink-1': 'CuerdOS Standard',
			'str-content-downloadlink-1': 'This is the edition with the default CuerdOS environment, which has the Sway (Wayland) and I3 (Xorg) window manager.',
			'str-title-downloadlink-2': 'CuerdOS Legacy',
			'str-content-downloadlink-2': 'Originally, CuerdOS was planned as Xfce-only, an idea initially discarded but now revived as a dedicated edition.',
			'str-subtitle-upgradewarning': '*Before testing the system, we strongly recommend that you upgrade to the latest version, as it will have all the new features and bugs fixed.*',
			'str-credits': 'Created By CuerdOS Dev Team. ',
		},
		//SPANISH STRINGS
		'es':
		{
			'str-menu-about': 'Acerca de',
			'str-menu-download': 'Descargar',
			'str-menu-wiki': 'Wiki',
			'str-slogan': 'Optimizado hasta el último píxel.',
			'str-title-about': 'Acerca de',
			'str-content-about-1': 'CuerdOS es una distribución GNU/Linux enfocada en la estabilidad y el rendimiento constante en computadoras de cualquier rango, sin perder ninguna funcionalidad.',
			'str-content-about-2': 'Esta distribución no es solo un derivado con un entorno de escritorio personalizado, sino que tiene una serie de optimizaciones y mejoras de rendimiento, incluida la optimización de servicios activos, mejoras en el uso del procesador, entre muchas otras.',
			'str-title-features': 'Características principales',
			'str-title-feature-1': 'Basado en Debian',
			'str-content-feature-1': 'Esto proporciona una gran estabilidad y seguridad, así como una muy buena flexibilidad.',
			'str-title-feature-2': 'Ligero y moderno',
			'str-content-feature-2': 'A diferencia de otras distribuciones ligeras, CuerdOS es un sistema que opta por lo más avanzado.',
			'str-title-feature-3': 'Sway',
			'str-content-feature-3': 'Esta distribución se centra en ofrecer una gran experiencia con Sway, aunque también cuenta con i3 y Xfce.',
			'str-title-feature-4': 'Repositorios propios',
			'str-content-feature-4': 'CuerdOS tiene sus propios repositorios donde se proporcionan paquetes que no están en Debian.',
			'str-title-otherfeatures': 'Otras características técnicas',
			'str-content-otherfeatures-1': 'Bauh Store preconfigurado para facilitar la instalación de programas (Debs y flatpak).',
			'str-content-otherfeatures-2': 'ZRam habilitado para un mejor rendimiento en máquinas de requisitos bajos, pero también para evitar escrituras en el SSD o tiempos de espera en el HDD por el SWAP.',
			'str-content-otherfeatures-3': 'Apt-fast preinstalado y configurado.',
			'str-content-otherfeatures-4': 'Uso optimizado de la CPU y gestión de RAM.',
			'str-content-otherfeatures-5': 'TLP preconfigurado tanto para Intel como para AMD para una mejor duración de la batería.',
			'str-content-otherfeatures-6': 'Pipewire como servidor multimedia.',
			'str-content-otherfeatures-7': 'GRUB y <i>logo de arranque</i> personalizados para tu querido neofetch.',
			'str-content-otherfeatures-8': 'Polybar y Rofi (y Waybar) preconfigurados y tematizados para lograr una buena coherencia visual junto con los iconos y temas de ventanas...',
			'str-content-otherfeatures-9': 'Soporte para virtualización.',
			'str-content-otherfeatures-10': 'Actualizaciones de seguridad automáticas.',
			'str-title-download': 'Descargar',
			'str-content-download-1': 'Esta es la primera versión de CuerdOS, llamada CuerdOS <a class="element" href="https://es.wikipedia.org/wiki/Cessna">\'Cessna\'</a>, en caso de encontrar errores o contribuir ideas, contáctenos por e-mail o elegram. ¡Gracias a todos por su colaboración y apoyo!',
			'str-content-download-2': 'Puede ver los registros de cambios y los errores reportados para diferentes versiones <a class="element" href="changelog.html">aquí</a>.',
			'str-title-tabletitle': 'Requisitos del sistema',
			'str-tabletitle-minimum': 'Minimos',
			'str-tabletitle-recommended': 'Recomendados',
			'str-tablecontent-minram': '1GB de RAM',
			'str-tablecontent-recracm': '2GB de RAM',
			'str-tablecontent-mincpu': 'CPU x86_64 a 1,00 Ghz',
			'str-tablecontent-mindisk': '15GB de almacenamiento',
			'str-tablecontent-recdisk': '15GB de almacenamiento en SSD',
			'str-title-downloadlink-1': 'CuerdOS Standar',
			'str-content-downloadlink-1': 'Esta es la edición con el entorno predeterminado de CuerdOS, el cual posee el gestor de ventanas Sway (Wayland) e I3 (Xorg).',
			'str-title-downloadlink-2': 'CuerdOS Legacy',
			'str-content-downloadlink-2': 'Originalmente, CuerdOS estaba planeado solo como Xfce, una idea inicialmente descartada pero ahora revivida como una edición dedicada.',
			'str-subtitle-upgradewarning': '*Antes de probar el sistema, recomendamos encarecidamente que actualice a la última versión, ya que tendrá todas las nuevas características y errores corregidos.*',
			'str-credits': 'Creado por CuerdOS Dev Team. ',
		},
		// ??? STRINGS
		'fr':
		{
			//You can add other translations by putting language code (e.g fr, pt or it)
		}
		
	};

	var languageInfoElement = document.createElement('p');

	if (translations[browserLanguage])
	{
		updatePageContent(translations, browserLanguage);
	}
	else
	{
		updatePageContent(translations, 'en');
	}
}

// Call the initialization function
initializePageContent();

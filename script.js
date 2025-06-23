const groups = {
    1: [
        "ATTENTION_SAFETYBARS.wav", "BLIJVEN_ZITTEN_AUB.mp3", "BRUUT_GELUID.mp3", "CAR_START.mp3", "COUNTDOWN_DRUM.mp3", "GONG.mp3", "KAPITEIN.mp3", "KLAAR_VOOR_DE_START.mp3", "KLAXON.mp3", "LADIES_AND_GENTLEMEN.mp3", "LOOK_OUT.mp3", "NIEUWE_START_MEIJER.wav", "NOW_IT'S_TIME.mp3", "OPGEPAST_WE_GAAN_STARTEN.mp3", "OZ_COUNTDOWN.mp3", "SAFETY_FIRST.mp3", "SCREAMINATOR_ALERT.mp3", "SERVUS.mp3", "START_MARTIN_MEIJER.wav", "TUUT_TUUT.mp3", "VLOER_VRIJMAKEN.mp3", "ZUPA_KARUSELL.mp3"
    ],
    2: [
        "ARE_YOU_READY.mp3", "BOOM_BOOM_HOT_IN_HERE.mp3", "CANTA_MI_CANCION.mp3", "CULO.mp3", "DAM_DIE_DAM_HARD.wav", "DAM_DIE_DAM_ZACHT.wav", "DAS_GEHT_AB.mp3", "FLYING_HIGH.mp3", "GANGNAM_STYLE.mp3", "GET_THE_HELL_OUT_OF_THIS_CLUB.mp3", "GET_UP.mp3", "HET_IS_ONGELOFELIJK_SPANNEND.mp3", "IK_NEEM_JE_MEE.mp3", "LIKE_TO_MOVE_IT.mp3", "OLE_OLE.mp3", "OMHOOG_DIE_HANDEN.mp3", "OMHOOG_OMLAAG.mp3", "OP_EN_NEER.mp3", "STARWARS.mp3", "UPDOWN.mp3"
    ],
    3: [
        "BRING_THE_ACTION.mp3", "DAARRR_GAAT_IE_WEER.mp3", "FUCKING_HIGH_SPEED.mp3", "HERE_WE_GO_AGAIN_(YEAH).mp3", "ITS_NUMBER_ONE.mp3", "ITS_NUMBER_ONE_(SHOW).mp3", "I_FEEL_GOOD.mp3", "KOMT_IE_DAN_HE.mp3", "LACH_THRILLER.mp3", "MOTHERFCKERS_GO.mp3", "ONWIJS_GAAF_TE_GEK.mp3", "OOHLALA.mp3", "OP_ZN_KOPPIE.mp3", "OW_YEAH_(SCREAM_AND_SHOUT).mp3", "PARTY_ALARM.mp3", "ROUND_AND_ROUND.wav", "SUPERGABBER.wav", "TACATA.mp3", "TERING_DAT_KRIEBELT.wav", "WHOEP.mp3"
    ],
    4: [
        "ALLE_REMMEN_LOS.mp3", "ATTENTIONE.mp3", "BLUB.mp3", "BOOMA_YEE.mp3", "CRAZY_FROG.mp3", "DANCE_WITH_THE_DEVIL.mp3", "DRANKDRUGS.wav", "GAAN_MET_DIE_BANAAN.wav", "GAS_OP_DIE_LOLLIE.mp3", "HELEMAAL_NAAR_DE_KLOTE.mp3", "HIGH_SPEED.mp3", "I'VE_GOT_THAT_POWER.mp3", "JONGE_KUT.mp3", "NIET_SNELLER.mp3", "PIRATES_REMIX.wav", "SPEEDY_GONZALES.mp3", "STOP_EN_DOOR!.mp3", "TURBO.mp3", "TURBO_MUZIEKJE.mp3", "VLAMMEN.mp3", "WAAR_IS_DAT_FEESTJE.mp3", "WAT_IS_DAT_LEKKER_HE.mp3", "YOU_SPIN_ME.mp3"
    ],
    5: [
        "BTR_STOP_WOOHOO.wav", "BTR_WINDOWS_DOWN.wav", "CANT_TOUCH_THIS.mp3", "CARNAVAL_FESTIVAL.mp3", "CONGA.mp3", "DOLCE_VITA.mp3", "GANGNAM_STYLE_SLOW.mp3", "GHOST_IN_THE_MACHINE.mp3", "KABOUTER_PLOP_THEME.mp3", "KWEK_KWEK_KWEK.mp3", "LET_IT_GO.mp3", "MUCHO_MAMBO_SWAY.mp3", "PINK_PANTHER.mp3", "WALZ_1.mp3", "WALZ_2.mp3", "WALZ_3.mp3", "WALZ_4.mp3"
    ],
    6: [
        "BYE_BYE_RICHTOFEN.mp3", "BYE_BYE_SAMANTHA.mp3", "DISC_SPIN.mp3", "EINDTUNE.mp3", "EXIT_THE_RIDE.mp3", "FINALE.mp3", "FLUTE.mp3", "GAME_OVER.mp3", "GAME_OVER_MARIO.mp3", "GAME_OVER_SONG.mp3", "GET_ON_THE_FLOOR.mp3", "HEY_NOW.mp3", "HOT_HOT_HOT.mp3", "IK_GA_HARD.mp3", "JUST_TURN_IT_UP_NOW.mp3", "LOONEY_TUNES_END.mp3", "LOONEY_TUNES_THATS_ALL_FOLKS.mp3", "RIEMEN_LOS_UITSTAPPEN.mp3", "START_OVER.mp3", "TOT_ZIENS.mp3"
    ],
    7: [
        "EVERYBODY_JUMP.mp3", "HARDWELL_COBRA_REMIX.mp3", "LASERS.mp3", "MARIO_ANIMALS.mp3", "REWIND_SPLASH.wav", "ROSI_POLKA.mp3", "SCREAMINATOR_SONG.mp3", "SNOLLEBOLLEKE.mp3", "SUPERGEIL.mp3", "SUPER_BREAKDANCE.mp3", "SUPER_CARROUSELL.mp3", "SUPER_MACHINE.mp3", "SUPER_SCOOTER.mp3", "TROMPETTE.mp3", "TSUNAMI.mp3", "TURBO_AANDRIJVING.mp3", "UND_JETZT_KOMMEN_DIE_KANONEN.mp3", "UP_N_AWAY.mp3", "VOGELTJESDANS.mp3", "WAHNSINN.mp3", "WAKKER_WORDEN_LANG.wav", "WAT_ZIJN_ZE_GEGROEID.mp3", "WOOHOO_FROZEN.mp3"
    ],
    8: [
        "BITTE_MACHEN_ZIE_DIE_KASSE_FREI.mp3", "BOOBIES.mp3", "BUURMAN.mp3", "CHECK_IT_OUT.mp3", "DROMMELS_DROMMELS.mp3", "EFFE_WACHTUHH.mp3", "FLUIT.mp3", "GOEDZO_KNUL.mp3", "IK_ZIE_JE_BORSTEN.mp3", "KOOP_PENNINGEN_EN_KAARTJES.mp3", "KOOP_UW_KAARTJES_AAN_DE_KASSA.mp3", "KWESTIE_VAN_GEDULD.mp3", "NIEUWE_RONDE.mp3", "U_KUNT_NOG_INSTAPPEN.mp3", "WACHTEN_VERVEEL.mp3", "WACHTMUZIEKJE.mp3", "WAKKER_WORDEN_KORT.wav", "WAT_DOE_JE.mp3", "WAT_EEN_MOOI_KONTJE_1.mp3", "WAT_EEN_MOOI_KONTJE_2.mp3"
    ]
};

let currentGroup = 1;
let activeAudios = [];

function changeGroup(groupNumber) {
    currentGroup = groupNumber;
    const soundboard = document.getElementById('soundboard');
    soundboard.innerHTML = '';

    const groupSounds = groups[groupNumber];
    groupSounds.forEach((sound, index) => {
        const button = document.createElement('button');
        button.textContent = sound.replace(/_/g, ' ').replace(/\.(mp3|wav)/, '').toUpperCase();
        button.classList.add('btn', 'sound-btn');
        button.onclick = () => playSound(sound);

        const keyLabel = document.createElement('span');
        keyLabel.classList.add('key');
        keyLabel.textContent = String.fromCharCode(65 + index);
        button.appendChild(keyLabel);

        soundboard.appendChild(button);
    });
}

function changeCategory(groupNumber) {
    changeGroup(groupNumber);
}

function playSound(sound) {
    const audio = new Audio(`sounds/group${currentGroup}/${sound}`);
    audio.play();
    activeAudios.push(audio);
}

function stopAllSounds() {
    activeAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    activeAudios = [];
}

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        stopAllSounds();
        return;
    }

    if (e.code.startsWith('Digit')) {
        const groupNumber = parseInt(e.code.replace('Digit', ''));
        if (groupNumber >= 1 && groupNumber <= 8) {
            changeGroup(groupNumber);
        }
        return;
    }

    if (/^[a-z]$/i.test(e.key)) {
        const soundButtons = document.querySelectorAll('.soundboard button');
        const index = e.key.toLowerCase().charCodeAt(0) - 97;
        if (index >= 0 && index < soundButtons.length) {
            soundButtons[index].click();
        }
    }
});

changeGroup(1);
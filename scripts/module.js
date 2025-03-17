/**
 * Shadowrun 6th Edition - Korean Translation Module
 * @module shadowrun-6th-ko-translation
 */

export class SR6KoreanTranslation {
    static ID = 'shadowrun-6th-ko-translation';

    static initialize() {
        console.log('Shadowrun 6th Edition - Korean Translation | Initializing Module');
        
        // 번역 파일 로드
        fetch('modules/shadowrun-6th-ko-translation/lang/ko.json')
            .then(response => response.json())
            .then(translations => {
                // 기존 번역에 병합
                game.i18n.translations = foundry.utils.mergeObject(game.i18n.translations, translations);
                console.log('Shadowrun 6th Edition - Korean Translation | Translations loaded and merged');
            })
            .catch(error => {
                console.error('Shadowrun 6th Edition - Korean Translation | Error loading translations:', error);
            });
        
        // 언어 설정
        game.i18n.lang = "ko";
        
        // Foundry VTT 12 버전에서는 game.i18n.lang을 사용하여 현재 언어 확인
        if (game.i18n.lang === "ko") {
            console.log('Shadowrun 6th Edition - Korean Translation | Korean language detected');
        }
    }

    static ready() {
        console.log('Shadowrun 6th Edition - Korean Translation | Module Ready');
        
        // 시스템 ID 체크 없이 무조건 번역 적용
        console.log('Shadowrun 6th Edition - Korean Translation | Translation loaded');
    }
}

// 모듈 초기화
Hooks.once('init', () => {
    SR6KoreanTranslation.initialize();
});

// 게임 준비 완료 시
Hooks.once('ready', () => {
    SR6KoreanTranslation.ready();
}); 
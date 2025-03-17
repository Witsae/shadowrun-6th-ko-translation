/**
 * Shadowrun 6th Edition - Korean Translation Module
 * @module shadowrun-6th-ko-translation
 */

export class SR6KoreanTranslation {
    static ID = 'shadowrun-6th-ko-translation';

    static initialize() {
        console.log('Shadowrun 6th Edition - Korean Translation | Initializing Module');
        
        // 모듈이 로드될 때 언어 설정 확인
        if (game.settings.get("core", "language") === "ko") {
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
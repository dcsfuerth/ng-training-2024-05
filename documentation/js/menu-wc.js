'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">books documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-9149fbce8f9ae879cd32f7bea7ebd08863535c63636e9f9a83ac9c2f65330cc3b3542d9b8335818db96718938a75bdf888a9912cb30af1e21955bef16c05b47a"' : 'data-bs-target="#xs-components-links-module-AppModule-9149fbce8f9ae879cd32f7bea7ebd08863535c63636e9f9a83ac9c2f65330cc3b3542d9b8335818db96718938a75bdf888a9912cb30af1e21955bef16c05b47a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9149fbce8f9ae879cd32f7bea7ebd08863535c63636e9f9a83ac9c2f65330cc3b3542d9b8335818db96718938a75bdf888a9912cb30af1e21955bef16c05b47a"' :
                                            'id="xs-components-links-module-AppModule-9149fbce8f9ae879cd32f7bea7ebd08863535c63636e9f9a83ac9c2f65330cc3b3542d9b8335818db96718938a75bdf888a9912cb30af1e21955bef16c05b47a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Test234Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Test234Component</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-9149fbce8f9ae879cd32f7bea7ebd08863535c63636e9f9a83ac9c2f65330cc3b3542d9b8335818db96718938a75bdf888a9912cb30af1e21955bef16c05b47a"' : 'data-bs-target="#xs-pipes-links-module-AppModule-9149fbce8f9ae879cd32f7bea7ebd08863535c63636e9f9a83ac9c2f65330cc3b3542d9b8335818db96718938a75bdf888a9912cb30af1e21955bef16c05b47a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-9149fbce8f9ae879cd32f7bea7ebd08863535c63636e9f9a83ac9c2f65330cc3b3542d9b8335818db96718938a75bdf888a9912cb30af1e21955bef16c05b47a"' :
                                            'id="xs-pipes-links-module-AppModule-9149fbce8f9ae879cd32f7bea7ebd08863535c63636e9f9a83ac9c2f65330cc3b3542d9b8335818db96718938a75bdf888a9912cb30af1e21955bef16c05b47a"' }>
                                            <li class="link">
                                                <a href="pipes/BookFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookFilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModuleaModule.html" data-type="entity-link" >ModuleaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ModuleaModule-b7372dda85932d742131ebc76a1a9a11e48fb53f967c58e9e920eeb0fe79a2c81b34fc2e2912fa99ba90c99db80843835618d2c877bea3a6bff488d0865c6985"' : 'data-bs-target="#xs-components-links-module-ModuleaModule-b7372dda85932d742131ebc76a1a9a11e48fb53f967c58e9e920eeb0fe79a2c81b34fc2e2912fa99ba90c99db80843835618d2c877bea3a6bff488d0865c6985"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModuleaModule-b7372dda85932d742131ebc76a1a9a11e48fb53f967c58e9e920eeb0fe79a2c81b34fc2e2912fa99ba90c99db80843835618d2c877bea3a6bff488d0865c6985"' :
                                            'id="xs-components-links-module-ModuleaModule-b7372dda85932d742131ebc76a1a9a11e48fb53f967c58e9e920eeb0fe79a2c81b34fc2e2912fa99ba90c99db80843835618d2c877bea3a6bff488d0865c6985"' }>
                                            <li class="link">
                                                <a href="components/ModuleaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModuleaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModuleaRoutingModule.html" data-type="entity-link" >ModuleaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-a0cdc94115a1028de3a769b16628296ca7443ae7ff0b77464472cc7102ef98362a0662d12416ccdb1d7c7d40126dcaf521f8ed147f61a805d038ad6e2dbcaa92"' : 'data-bs-target="#xs-components-links-module-SharedModule-a0cdc94115a1028de3a769b16628296ca7443ae7ff0b77464472cc7102ef98362a0662d12416ccdb1d7c7d40126dcaf521f8ed147f61a805d038ad6e2dbcaa92"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-a0cdc94115a1028de3a769b16628296ca7443ae7ff0b77464472cc7102ef98362a0662d12416ccdb1d7c7d40126dcaf521f8ed147f61a805d038ad6e2dbcaa92"' :
                                            'id="xs-components-links-module-SharedModule-a0cdc94115a1028de3a769b16628296ca7443ae7ff0b77464472cc7102ef98362a0662d12416ccdb1d7c7d40126dcaf521f8ed147f61a805d038ad6e2dbcaa92"' }>
                                            <li class="link">
                                                <a href="components/CalculatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalculatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RatingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RatingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BookDataService.html" data-type="entity-link" >BookDataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link" >Book</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { assign, cloneDeep } from 'lodash-es';
import { rol, roldos } from './data';

@Injectable({ providedIn: 'root' })
export class RolMockApi {
    private _roles: any = rol;
    private _rolesdos: any = roldos;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/common/roles')
            .reply(() => [200, cloneDeep(this._roles)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/common/rolesdos')
            .reply(() => [200, cloneDeep(this._rolesdos)]);
    }
}

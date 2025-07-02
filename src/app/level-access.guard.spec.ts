import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { levelAccessGuard } from './level-access.guard';

describe('levelAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => levelAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

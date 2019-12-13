import { TestBed } from '@angular/core/testing';

import { QuillInitializeServiceService } from './quill-initialize-service.service';

describe('QuillInitializeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuillInitializeServiceService = TestBed.get(QuillInitializeServiceService);
    expect(service).toBeTruthy();
  });
});

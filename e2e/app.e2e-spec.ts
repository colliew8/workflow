import { WorkflowsPage } from './app.po';

describe('workflows App', () => {
  let page: WorkflowsPage;

  beforeEach(() => {
    page = new WorkflowsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

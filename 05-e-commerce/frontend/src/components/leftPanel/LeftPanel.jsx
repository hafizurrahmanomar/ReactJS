import { ProductGrid } from '../product';
import { FilterSection } from './FilterSection';
import { LeftPanelHeader } from './LeftPanelHeader';

export function LeftPanel() {
  const headerTitle = 'Simple E-commerce App';

  return (
    <div>
      <LeftPanelHeader title={headerTitle} />
      <FilterSection />
      <ProductGrid />
    </div>
  );
}

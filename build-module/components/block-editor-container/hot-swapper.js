import storeHotSwapPlugin from '../../store/plugins/store-hot-swap';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';

function HotSwapper({
  isEditing,
  hotSwap
}) {
  useEffect(() => {
    hotSwap(isEditing);
  }, [isEditing]);
  return null;
}

export default compose([withSelect(select => {
  const {
    isEditing
  } = select('isolated/editor');
  return {
    isEditing: isEditing()
  };
}), withDispatch((dispatch, ownProps, {
  select
}) => {
  return {
    hotSwap: isEditing => {
      storeHotSwapPlugin.resetEditor();

      if (isEditing) {
        storeHotSwapPlugin.setEditor(select, dispatch);
      }
    }
  };
})])(HotSwapper);
//# sourceMappingURL=hot-swapper.js.map
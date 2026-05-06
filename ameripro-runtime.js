(function () {
  class LocalGroup {
    constructor() {
      this.visible = false;
      this.children = [];
    }
    add(child) {
      this.children.push(child);
    }
  }

  window.THREE = window.THREE || { Group: LocalGroup };
  window.GlobeEngine = window.GlobeEngine || {
    create() {
      const engine = {
        root: { add() {} },
        layerGroups: {},
        _ensureLayerGroups() {},
        updateLiveData() {},
        setLayerVisible(id, visible) {
          if (!this.layerGroups[id]) this.layerGroups[id] = new window.THREE.Group();
          this.layerGroups[id].visible = Boolean(visible);
        },
        setLayerOpacity() {},
      };
      window.__globalDataEngine = engine;
      return engine;
    },
  };
})();

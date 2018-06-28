"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
var pokemon_detail_view_model_1 = require("./pokemon-detail-view-model");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = pokemon_detail_view_model_1.PokemonDetailViewModel(page.navigationContext);
}
exports.onNavigatingTo = onNavigatingTo;
function onBackButtonTap() {
    frame_1.topmost().goBack();
}
exports.onBackButtonTap = onBackButtonTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi1kZXRhaWwtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBva2Vtb24tZGV0YWlsLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtREFBb0Q7QUFFcEQseUVBQXFFO0FBRXJFLHdCQUErQixJQUFlO0lBQzVDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxrREFBc0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBSEQsd0NBR0M7QUFFRDtJQUNFLGVBQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3JCLENBQUM7QUFGRCwwQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgUG9rZW1vbkRldGFpbFZpZXdNb2RlbCB9IGZyb20gXCIuL3Bva2Vtb24tZGV0YWlsLXZpZXctbW9kZWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gUG9rZW1vbkRldGFpbFZpZXdNb2RlbChwYWdlLm5hdmlnYXRpb25Db250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQmFja0J1dHRvblRhcCgpIHtcbiAgdG9wbW9zdCgpLmdvQmFjaygpO1xufVxuIl19
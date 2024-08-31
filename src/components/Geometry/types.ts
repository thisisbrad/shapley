import { BaseGeometricProps, GeometricComponents } from "../Geometric";
import { SVGCanvasProps } from "../SVGCanvas";
import { PStyle, PUnit, WithComponents } from "../types";

export type GeometryProps = WithComponents<BaseGeometricProps & PUnit & PStyle, GeometryComponents>;

export type GeometryComponents = {
	/**
	 * Geometry moves the svg prop to the components section so it can be modified as well. 
	 */
	svg?: SVGCanvasProps
} & GeometricComponents;
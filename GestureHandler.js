import React from "react";
import { PanResponder, View } from "react-native";

const GestureHandler = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onTap,
}) => {
  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 20 || Math.abs(gestureState.dy) > 20;
      },
      onPanResponderRelease: (_, gestureState) => {
        console.log("Gesto dx:", gestureState.dx, "Gesto dy:", gestureState.dy); // Agrega esta línea
        if (gestureState.dx > 50) {
          onSwipeRight();
        } else if (gestureState.dx < -50) {
          onSwipeLeft();
        } else if (gestureState.dy > 50) {
          onSwipeDown();
        } else if (gestureState.dy < -50) {
          onSwipeUp();
        } else {
        }
      },
    })
  ).current;

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      {children}
    </View>
  );
};

export default GestureHandler;

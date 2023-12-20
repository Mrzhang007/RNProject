/**
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { RootStack } from '../src/RootStack';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// Use with React Native <= 0.63

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  test('shows profile screen when View Profile is pressed', async () => {
    const component = (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );

    render(component);

    const click = await screen.findByText('View Profile');
    fireEvent(click, 'press');

    const res = await screen.findByText('My Profile');
    expect(res).toBeOnTheScreen();
  });
});

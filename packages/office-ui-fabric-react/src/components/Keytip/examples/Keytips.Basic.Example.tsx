import * as React from 'react';
import { keytipMap } from './KeytipSetup';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ComboBox } from 'office-ui-fabric-react/lib/ComboBox';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';

const pivotItemStyle: React.CSSProperties = { width: 500, paddingTop: 20 };
const stackTokens: IStackTokens = { childrenGap: 20 };

export class KeytipsBasicExample extends React.Component<{}> {
  private _sampleOptions = [{ key: 'A', text: 'Option 1' }, { key: 'B', text: 'Option 2' }, { key: 'C', text: 'Option 3' }];

  /* tslint:disable:jsx-no-lambda */
  public render(): JSX.Element {
    return (
      <div>
        <p>For Pivots, keytips will first show for each of the pivots. After selecting a pivot, the Keytips for its content are shown.</p>
        <Pivot>
          <PivotItem headerText="Pivot 1" keytipProps={keytipMap.Pivot1Keytip} style={pivotItemStyle}>
            <Stack tokens={stackTokens}>
              <SpinButton label="Spin Button" keytipProps={keytipMap.SpinButtonKeytip} styles={{ root: { maxWidth: 200 } }} />
              <Toggle onText="Yes" offText="No" keytipProps={keytipMap.ToggleKeytip} />
              <span>
                Go to{' '}
                <Link keytipProps={keytipMap.LinkKeytip} href="http://www.bing.com" target="_blank">
                  Bing
                </Link>
              </span>
            </Stack>
          </PivotItem>

          <PivotItem headerText="Pivot 2" keytipProps={keytipMap.Pivot2Keytip} style={pivotItemStyle}>
            <Stack tokens={stackTokens}>
              <Checkbox label="Checkbox" keytipProps={keytipMap.CheckboxKeytip} />
              <Dropdown label="Dropdown" keytipProps={keytipMap.DropdownKeytip} options={this._sampleOptions} />
            </Stack>
          </PivotItem>

          <PivotItem headerText="Pivot 3" keytipProps={keytipMap.Pivot3Keytip} style={pivotItemStyle}>
            <ComboBox label="Combo Box" keytipProps={keytipMap.ComboBoxKeytip} options={this._sampleOptions} />
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}

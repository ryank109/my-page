import { Component } from 'react';
import RegistryAmazon from 'rk/components/registry-amazon';
import RegistryCB2 from 'rk/components/registry-cb2';
import RegistryCrateAndBarrel from 'rk/components/registry-crate-and-barrel';

export default class RegistryPage extends Component {
    render() {
        return (
            <div className="page registry">
                <div className="registry__container">
                    <RegistryCrateAndBarrel className="registry__item" />
                    <RegistryCB2 className="registry__item" />
                    <RegistryAmazon className="registry__item" />
                </div>
            </div>
        );
    }
}
